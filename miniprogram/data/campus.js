// ============================================================
// 校园数据文件 —— 全校唯一需要你维护的文件
// 每次完善只需改这里，页面代码不用动
//
// 坐标获取方法：
//   打开 https://lbs.qq.com/getPoint/ （腾讯坐标拾取器）
//   搜"山西师范大学"，逐个点位右键复制坐标，粘贴到下面
// ⚠️ 腾讯地图用 GCJ-02 坐标系，拾取器拿到的直接可用
// ============================================================

// 校园中心点（先用太原市中心占位，务必替换！）
const CAMPUS_CENTER = { lat: 37.870, lng: 112.550 };

// 地图标记点（食堂 / 快递 / 景观 ...）
const POIS = [
  // ==== 食堂（category: canteen）====
  { id: 1, name: '第一食堂', category: 'canteen', lat: 37.871, lng: 112.549, desc: '主食堂，三层' },
  { id: 2, name: '第二食堂', category: 'canteen', lat: 37.872, lng: 112.552, desc: '离东区宿舍近' },

  // ==== 快递（category: express）====
  { id: 3, name: '菜鸟驿站', category: 'express', lat: 37.869, lng: 112.551, desc: '淘宝/天猫包裹' },
  { id: 4, name: '京东派', category: 'express', lat: 37.870, lng: 112.553, desc: '京东/部分顺丰' },

  // ==== 景观（category: sight）====
  { id: 5, name: '图书馆', category: 'sight', lat: 37.871, lng: 112.551, desc: '地标建筑' },
  { id: 6, name: '樱花大道', category: 'sight', lat: 37.870, lng: 112.548, desc: '春季赏花点' },
];

// 食堂档口 + 菜品（canteenId 对应上面 POIS 的 id）
const STALLS = [
  { id: 101, canteenId: 1, name: '兰州拉面', price: '10-15元', signature: '牛肉面' },
  { id: 102, canteenId: 1, name: '黄焖鸡米饭', price: '13-16元', signature: '微辣黄焖鸡' },
  { id: 103, canteenId: 1, name: '自选菜窗口', price: '8-12元', signature: '两荤一素' },
  { id: 104, canteenId: 2, name: '麻辣香锅', price: '15-25元', signature: '按斤称重' },
  { id: 105, canteenId: 2, name: '山西刀削面', price: '9-13元', signature: '猪肉臊子面' },
];

// 投票的种子数据（演示用，让界面不空；真实累计存本地存储）
const SEED_VOTES = {
  101: { good: 32, soso: 5, bad: 1 },
  102: { good: 18, soso: 8, bad: 3 },
  103: { good: 25, soso: 12, bad: 2 },
  104: { good: 41, soso: 4, bad: 0 },
  105: { good: 28, soso: 6, bad: 1 },
};

const CATEGORY_META = {
  canteen: { label: '食堂', icon: '🍜', color: '#e11d48' },
  express: { label: '快递', icon: '📦', color: '#f59e0b' },
  sight:   { label: '景观', icon: '🌸', color: '#8b5cf6' },
};

module.exports = { CAMPUS_CENTER, POIS, STALLS, SEED_VOTES, CATEGORY_META };
