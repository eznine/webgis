const { POIS, STALLS, SEED_VOTES } = require('../../data/campus');
const app = getApp();

Page({
  data: {
    canteen: {},
    stalls: [],   // [{...档口信息, votes, goodRate, myChoice}]
  },

  onLoad(options) {
    const id = Number(options.id);
    const canteen = POIS.find(p => p.id === id) || {};
    wx.setNavigationBarTitle({ title: canteen.name || '食堂' });
    this.buildStalls(id);
    this.setData({ canteen });
  },

  onShow() {
    // 从别的页面返回时刷新投票显示
    if (this.data.canteen.id) this.buildStalls(this.data.canteen.id);
  },

  buildStalls(canteenId) {
    const myVotes = app.globalData.votes;
    const stalls = STALLS.filter(s => s.canteenId === canteenId).map(s => {
      // 展示数 = 种子数据（演示）+ 本机累计投票
      const seed = SEED_VOTES[s.id] || { good: 0, soso: 0, bad: 0 };
      const mine = myVotes[s.id] || {};
      const votes = {
        good: seed.good + (mine.good || 0),
        soso: seed.soso + (mine.soso || 0),
        bad:  seed.bad  + (mine.bad  || 0),
      };
      const total = votes.good + votes.soso + votes.bad;
      return {
        ...s,
        votes,
        total,
        goodRate: total ? Math.round(votes.good / total * 100) : 0,
        myChoice: mine.myChoice || null,
      };
    });
    this.setData({ stalls });
  },

  // 三键投票（结构化数据，规避 UGC 合规问题）
  vote(e) {
    const { stallId, choice } = e.currentTarget.dataset;
    const votes = app.globalData.votes;

    // 同一档口只能投一票，重复点击 = 换票
    const prev = votes[stallId];
    if (prev && prev.myChoice === choice) {
      return wx.showToast({ title: '已经投过啦', icon: 'none' });
    }
    // 换票：旧票 -1
    if (prev && prev.myChoice) prev[prev.myChoice] = (prev[prev.myChoice] || 0) - 1;
    votes[stallId] = votes[stallId] || {};
    votes[stallId][choice] = (votes[stallId][choice] || 0) + 1;
    votes[stallId].myChoice = choice;

    app.saveVotes();
    this.buildStalls(this.data.canteen.id);
    wx.showToast({ title: choice === 'good' ? '已记录 👍' : choice === 'soso' ? '已记录 😐' : '已避雷 ⚠️', icon: 'none' });
  },
});
