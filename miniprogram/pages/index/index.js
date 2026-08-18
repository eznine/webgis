const { CAMPUS_CENTER, POIS, STALLS, SEED_VOTES, CATEGORY_META } = require('../../data/campus');

Page({
  data: {
    center: CAMPUS_CENTER,
    markers: [],
    categories: ['all', 'canteen', 'express', 'sight'],
    currentCat: 'all',
    poiList: [],
    randomPick: null,
  },

  onLoad() {
    this.buildMarkers('all');
  },

  // 生成地图标记：小程序 map 组件要求 marker 有 id/latitude/longitude
  buildMarkers(cat) {
    const list = cat === 'all' ? POIS : POIS.filter(p => p.category === cat);
    const markers = list.map(p => ({
      id: p.id,
      latitude: p.lat,
      longitude: p.lng,
      title: p.name,
      iconPath: this.iconFor(p.category),
      width: 30, height: 30,
      callout: {
        content: `${CATEGORY_META[p.category].icon} ${p.name}`,
        display: 'ALWAYS', borderRadius: 8, padding: 6, fontSize: 12,
        bgColor: '#ffffff', color: '#0f172a',
      },
    }));
    this.setData({ markers, poiList: list, currentCat: cat });
  },

  // 无图标资源时的方案：用 callout 文字代替自定义图标（0 资源跑起来）
  iconFor(category) {
    // 透明 1px png 占位；后续可换成真实图标文件
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
  },

  switchCat(e) {
    this.buildMarkers(e.currentTarget.dataset.cat);
  },

  // 点击标记 → 食堂跳详情，其他弹提示
  onMarkerTap(e) {
    const id = e.detail.markerId;
    const poi = POIS.find(p => p.id === id);
    if (poi && poi.category === 'canteen') {
      wx.navigateTo({ url: `/pages/canteen/canteen?id=${poi.id}&name=${poi.name}` });
    } else if (poi) {
      wx.showModal({ title: poi.name, content: poi.desc || '暂无介绍', showCancel: false });
    }
  },

  // "今天吃什么"：从好评率高的档口里随机挑
  whatToEat() {
    const scored = STALLS.map(s => {
      const seed = SEED_VOTES[s.id] || { good: 1, soso: 0, bad: 0 };
      const total = seed.good + seed.soso + seed.bad;
      return { ...s, goodRate: seed.good / total };
    });
    // 好评率 > 70% 的进入抽奖池（避雷的没资格）
    const pool = scored.filter(s => s.goodRate >= 0.7);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (!pick) return;
    const canteen = POIS.find(p => p.id === pick.canteenId);
    this.setData({ randomPick: `${pick.name}（${pick.signature}）· ${canteen.name}` });
    wx.vibrateShort({ type: 'medium' });
  },

  goCanteen(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/canteen/canteen?id=${id}&name=${name}` });
  },
});
