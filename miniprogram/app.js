// app.js
App({
  onLaunch() {
    // 恢复本地投票数据
    const votes = wx.getStorageSync('stall_votes') || {};
    this.globalData.votes = votes;
  },
  globalData: {
    votes: {},   // { stallId: {good, soso, bad, myChoice} }
  },
  saveVotes() {
    wx.setStorageSync('stall_votes', this.globalData.votes);
  },
});
