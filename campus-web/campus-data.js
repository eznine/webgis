(function(){
// ============================================================
// 校园数据文件 —— 全校唯一需要你维护的文件
//
// ✅ 坐标来源：用户实地采集（2026-08-19 三批，74 点位）
// 🗂️ ID 规划：100-199 宿舍/浴室/快递/超市 | 200-299 餐厅/小吃饮品
//            300-399 教学楼 | 400-499 办公楼/其他/体育
// ⚠️ 腾讯地图用 GCJ-02 坐标系
// ============================================================

// 校园中心点（全部点位外包中心，含北区）
const CAMPUS_CENTER = { lat: 37.746266, lng: 112.66296 };

// 一级：点位
const POIS = [
  // ==== 餐厅（canteen，新竹+麦道已合并）====
  { id: 200, name: '新竹·麦道餐厅', category: 'canteen', lat: 37.741612, lng: 112.663259, desc: '一层新竹；二层麦道' },
  { id: 201, name: '青蓝餐厅', category: 'canteen', lat: 37.740711, lng: 112.660614, desc: '一层/三层为餐厅' },
  { id: 202, name: '诚得餐厅', category: 'canteen', lat: 37.742795, lng: 112.660475, desc: '餐厅点位' },
  { id: 203, name: '北区餐厅', category: 'canteen', lat: 37.75021, lng: 112.664211, desc: '餐厅点位' },

  // ==== 小吃饮品（snack）====
  { id: 204, name: '幸运咖', category: 'snack', lat: 37.742545, lng: 112.660401, desc: '现磨咖啡' },
  { id: 205, name: '塔斯汀', category: 'snack', lat: 37.742456, lng: 112.660396, desc: '中国汉堡' },
  { id: 206, name: '蜜雪冰城', category: 'snack', lat: 37.742383, lng: 112.660614, desc: '柠檬水/冰淇淋' },
  { id: 207, name: '肯德基', category: 'snack', lat: 37.74249, lng: 112.660393, desc: '炸鸡汉堡' },

  // ==== 宿舍（dorm，28 栋）====
  { id: 100, name: '6号宿舍楼', category: 'dorm', lat: 37.741518, lng: 112.662541, desc: '宿舍点位' },
  { id: 101, name: '7号宿舍楼', category: 'dorm', lat: 37.74107, lng: 112.662535, desc: '宿舍点位' },
  { id: 102, name: '8号宿舍楼', category: 'dorm', lat: 37.74053, lng: 112.662508, desc: '宿舍点位' },
  { id: 103, name: '5号宿舍楼', category: 'dorm', lat: 37.740497, lng: 112.66327, desc: '宿舍点位' },
  { id: 104, name: '4号宿舍楼', category: 'dorm', lat: 37.740885, lng: 112.663292, desc: '宿舍点位' },
  { id: 105, name: '1号宿舍楼', category: 'dorm', lat: 37.741919, lng: 112.664231, desc: '宿舍点位' },
  { id: 106, name: '2号宿舍楼', category: 'dorm', lat: 37.741578, lng: 112.664267, desc: '宿舍点位' },
  { id: 107, name: '3号宿舍楼', category: 'dorm', lat: 37.741217, lng: 112.664173, desc: '宿舍点位' },
  { id: 108, name: '9号宿舍楼', category: 'dorm', lat: 37.740827, lng: 112.661628, desc: '宿舍点位' },
  { id: 109, name: '10号宿舍楼', category: 'dorm', lat: 37.740477, lng: 112.661637, desc: '宿舍点位' },
  { id: 110, name: '11号宿舍楼', category: 'dorm', lat: 37.741931, lng: 112.660705, desc: '宿舍点位' },
  { id: 111, name: '12号宿舍楼', category: 'dorm', lat: 37.741561, lng: 112.66075, desc: '宿舍点位' },
  { id: 112, name: '13号宿舍楼', category: 'dorm', lat: 37.74118, lng: 112.660679, desc: '宿舍点位' },
  { id: 113, name: '14号宿舍楼', category: 'dorm', lat: 37.740844, lng: 112.659728, desc: '宿舍点位' },
  { id: 114, name: '15号宿舍楼', category: 'dorm', lat: 37.740506, lng: 112.659706, desc: '宿舍点位' },
  { id: 115, name: '16号宿舍楼', category: 'dorm', lat: 37.741523, lng: 112.658886, desc: '宿舍点位' },
  { id: 116, name: '17号宿舍楼', category: 'dorm', lat: 37.741208, lng: 112.658904, desc: '宿舍点位' },
  { id: 117, name: '18号宿舍楼', category: 'dorm', lat: 37.740894, lng: 112.658849, desc: '宿舍点位' },
  { id: 118, name: '19号宿舍楼', category: 'dorm', lat: 37.740547, lng: 112.658865, desc: '宿舍点位' },
  { id: 119, name: '20号宿舍楼', category: 'dorm', lat: 37.740538, lng: 112.657807, desc: '宿舍点位' },
  { id: 120, name: '北区2号宿舍楼', category: 'dorm', lat: 37.74895, lng: 112.661485, desc: '宿舍点位' },
  { id: 121, name: '北区3号宿舍楼', category: 'dorm', lat: 37.749451, lng: 112.661503, desc: '宿舍点位' },
  { id: 122, name: '北区6号宿舍楼', category: 'dorm', lat: 37.74981, lng: 112.661495, desc: '宿舍点位' },
  { id: 123, name: '北区3号宿舍楼', category: 'dorm', lat: 37.749937, lng: 112.663135, desc: '宿舍点位' },
  { id: 124, name: '新宿舍楼', category: 'dorm', lat: 37.742063, lng: 112.665378, desc: '宿舍点位' },
  { id: 125, name: '23号宿舍楼', category: 'dorm', lat: 37.742144, lng: 112.666991, desc: '宿舍点位' },
  { id: 126, name: '21号宿舍楼', category: 'dorm', lat: 37.74407, lng: 112.664984, desc: '宿舍点位' },
  { id: 127, name: '22号宿舍楼', category: 'dorm', lat: 37.744323, lng: 112.664911, desc: '宿舍点位' },

  // ==== 浴室（bath）====
  { id: 130, name: '南区浴室', category: 'bath', lat: 37.740854, lng: 112.664199, desc: '浴室点位' },
  { id: 131, name: '北区浴室', category: 'bath', lat: 37.750197, lng: 112.661525, desc: '浴室点位' },

  // ==== 快递（express）====
  { id: 132, name: '邮政快递', category: 'express', lat: 37.739883, lng: 112.664937, desc: '快递点位' },
  { id: 133, name: '顺丰快递', category: 'express', lat: 37.739735, lng: 112.664776, desc: '快递点位' },
  { id: 134, name: '菜鸟驿站', category: 'express', lat: 37.742965, lng: 112.668547, desc: '快递点位' },

  // ==== 超市（shop）====
  { id: 135, name: '学子超市', category: 'shop', lat: 37.739945, lng: 112.66468, desc: '超市点位' },
  { id: 136, name: '诚得购物中心', category: 'shop', lat: 37.742394, lng: 112.66043, desc: '地下一层和三层' },
  { id: 137, name: '三晋消费帮扶超市', category: 'shop', lat: 37.74083, lng: 112.66445, desc: '超市点位' },

  // ==== 教学楼（teaching）====
  { id: 300, name: '5号教学楼', category: 'teaching', lat: 37.742791, lng: 112.662441, desc: '教学楼点位' },
  { id: 301, name: '4号教学楼', category: 'teaching', lat: 37.742786, lng: 112.663199, desc: '教学楼点位' },
  { id: 302, name: '3号教学楼', category: 'teaching', lat: 37.742767, lng: 112.663969, desc: '教学楼点位' },
  { id: 303, name: '实验楼', category: 'teaching', lat: 37.743837, lng: 112.662705, desc: '教学楼点位' },
  { id: 304, name: '信息楼', category: 'teaching', lat: 37.743868, lng: 112.66384, desc: '教学楼点位' },
  { id: 305, name: '图书馆', category: 'teaching', lat: 37.743389, lng: 112.661708, desc: '教学楼点位' },
  { id: 306, name: '北区5号教学楼', category: 'teaching', lat: 37.75209, lng: 112.661047, desc: '教学楼点位' },
  { id: 307, name: '北区2号教学楼', category: 'teaching', lat: 37.750997, lng: 112.661211, desc: '化材学院' },
  { id: 308, name: '北区图书馆', category: 'teaching', lat: 37.751477, lng: 112.662163, desc: '教学楼点位' },
  { id: 309, name: '北区1号教学楼', category: 'teaching', lat: 37.752797, lng: 112.662038, desc: '教学楼点位' },
  { id: 310, name: '北区3号教学楼', category: 'teaching', lat: 37.751353, lng: 112.663141, desc: '教学楼点位' },
  { id: 311, name: '7号教学楼', category: 'teaching', lat: 37.74273, lng: 112.658188, desc: '体育学院' },
  { id: 312, name: '8号教学楼', category: 'teaching', lat: 37.744389, lng: 112.663042, desc: '教学楼点位' },
  { id: 313, name: '1号教学楼', category: 'teaching', lat: 37.743197, lng: 112.666978, desc: '教学楼点位' },
  { id: 314, name: '2号教学楼', category: 'teaching', lat: 37.74262, lng: 112.666189, desc: '教学楼点位' },
  { id: 315, name: '9号教学楼', category: 'teaching', lat: 37.744539, lng: 112.66587, desc: '教学楼点位' },
  { id: 316, name: '10号教学楼', category: 'teaching', lat: 37.744249, lng: 112.666944, desc: '教学楼点位' },
  { id: 317, name: '2号教学楼(东)', category: 'teaching', lat: 37.744454, lng: 112.66688, desc: '教学楼点位' },

  // ==== 办公楼（office）====
  { id: 400, name: '北区1号办公楼', category: 'office', lat: 37.752437, lng: 112.662091, desc: '办公楼点位' },
  { id: 401, name: '北区4号办公楼', category: 'office', lat: 37.750768, lng: 112.663203, desc: '地科院' },
  { id: 402, name: '办公楼', category: 'office', lat: 37.743487, lng: 112.664943, desc: '办公楼点位' },
  { id: 403, name: '行政楼', category: 'office', lat: 37.743097, lng: 112.664955, desc: '办公楼点位' },

  // ==== 其他（other）====
  { id: 410, name: '校医院', category: 'other', lat: 37.744112, lng: 112.665651, desc: '校医院' },
  { id: 411, name: '科学会堂', category: 'other', lat: 37.741836, lng: 112.661616, desc: '会堂' },
  { id: 412, name: '文化艺术活动中心', category: 'other', lat: 37.750214, lng: 112.664746, desc: '活动中心' },
  { id: 413, name: '音乐学院', category: 'office', lat: 37.741281, lng: 112.658239, desc: '学院楼' },
  { id: 414, name: '美术学院', category: 'office', lat: 37.740927, lng: 112.657373, desc: '学院楼' },
  { id: 415, name: '学前教育实训中心', category: 'office', lat: 37.74202, lng: 112.659846, desc: '实训中心' },

  // ==== 体育（sport）====
  { id: 420, name: '体育实训楼', category: 'sport', lat: 37.741014, lng: 112.66677, desc: '体育场馆' },
  { id: 421, name: '篮球场A', category: 'sport', lat: 37.741421, lng: 112.665271, desc: '篮球场' },
  { id: 422, name: '篮球场B', category: 'sport', lat: 37.741339, lng: 112.661442, desc: '篮球场' },
  { id: 423, name: '排球场', category: 'sport', lat: 37.74141, lng: 112.666081, desc: '排球场' },
  { id: 424, name: '羽毛球场', category: 'sport', lat: 37.741339, lng: 112.661784, desc: '羽毛球场' },
  { id: 425, name: '乒乓球场', category: 'sport', lat: 37.741109, lng: 112.661474, desc: '乒乓球场' },
  { id: 426, name: '网球场', category: 'sport', lat: 37.744235, lng: 112.658961, desc: '网球场' },
  { id: 427, name: '南区操场', category: 'sport', lat: 37.743081, lng: 112.659565, desc: '操场' },
  { id: 428, name: '北区操场', category: 'sport', lat: 37.749249, lng: 112.659964, desc: '操场' },
  { id: 500, name: '6号教学楼', category: 'teaching', lat: 37.741793, lng: 112.662509, desc: '教学楼点位' },
  { id: 501, name: '毓秀湖', category: 'other', lat: 37.746544, lng: 112.659385, desc: '其他点位' },
  { id: 502, name: '健身房', category: 'sport', lat: 37.743243, lng: 112.658286, desc: '体育点位' },
  { id: 503, name: '学术交流中心', category: 'other', lat: 37.743043, lng: 112.660463, desc: '体育点位' },
  { id: 504, name: '化材学院报告厅', category: 'other', lat: 37.750988, lng: 112.661283, desc: '其他点位' },
  { id: 505, name: '图书馆报告厅', category: 'other', lat: 37.743473, lng: 112.661935, desc: '其他点位' },
];

// 档口品类
const STALL_CATS = {
  noodle: '面食',
  rice:   '米饭',
  snack:  '小吃',
  drink:  '饮品',
  fast:   '快餐',
};

// 二级：餐厅档口（新竹+麦道已合并为 canteenId 200）
const STALLS = [
  { id: 201, canteenId: 200, name: '面食窗口', cat: 'noodle', avgPrice: 11, price: '8-13元', signature: '刀削面' },
  { id: 202, canteenId: 200, name: '米饭套餐', cat: 'rice', avgPrice: 12, price: '10-14元', signature: '两荤一素' },
  { id: 203, canteenId: 200, name: '风味小吃', cat: 'snack', avgPrice: 10, price: '6-12元', signature: '炸串/麻辣烫' },
  { id: 204, canteenId: 200, name: '麦道自选', cat: 'rice', avgPrice: 12, price: '9-15元', signature: '自选称重' },
  { id: 205, canteenId: 200, name: '麦道盖浇饭', cat: 'rice', avgPrice: 12, price: '10-15元', signature: '招牌盖饭' },
  { id: 206, canteenId: 201, name: '青蓝一层窗口', cat: 'rice', avgPrice: 11, price: '8-14元', signature: '大众套餐' },
  { id: 207, canteenId: 201, name: '青蓝三层窗口', cat: 'snack', avgPrice: 11, price: '8-14元', signature: '风味档口' },
  { id: 208, canteenId: 202, name: '诚得套餐', cat: 'rice', avgPrice: 12, price: '9-15元', signature: '家常套餐' },
  { id: 213, canteenId: 203, name: '北区·面食', cat: 'noodle', avgPrice: 11, price: '8-13元', signature: '牛肉面' },
  { id: 214, canteenId: 203, name: '北区·米饭', cat: 'rice', avgPrice: 12, price: '10-14元', signature: '套餐' },
  { id: 215, canteenId: 203, name: '北区·小吃', cat: 'snack', avgPrice: 10, price: '6-12元', signature: '麻辣烫' },
  { id: 209, canteenId: 204, name: '幸运咖', cat: 'drink', avgPrice: 9, price: '5-15元', signature: '现磨咖啡' },
  { id: 210, canteenId: 205, name: '塔斯汀', cat: 'fast', avgPrice: 14, price: '10-25元', signature: '中国汉堡' },
  { id: 211, canteenId: 206, name: '蜜雪冰城', cat: 'drink', avgPrice: 5, price: '2-10元', signature: '柠檬水/冰淇淋' },
  { id: 212, canteenId: 207, name: '肯德基', cat: 'fast', avgPrice: 25, price: '15-50元', signature: '疯狂星期四' },
];

// 三级：菜品（示例占位）
const FOODS = [
  { id: 1001, stallId: 201, name: '牛肉刀削面', price: 12, desc: '现削现煮，汤浓面筋道' },
  { id: 1002, stallId: 201, name: '西红柿鸡蛋面', price: 10, desc: '家常口味' },
  { id: 1003, stallId: 201, name: '炸酱面', price: 11, desc: '老北京风味' },
  { id: 1004, stallId: 202, name: '两荤一素', price: 12, desc: '自选搭配' },
  { id: 1005, stallId: 202, name: '一荤两素', price: 10, desc: '经济实惠' },
  { id: 1006, stallId: 203, name: '麻辣烫', price: 13, desc: '按份计价' },
  { id: 1007, stallId: 203, name: '炸串', price: 8, desc: '现炸现吃' },
  { id: 1008, stallId: 204, name: '自选称重套餐', price: 13, desc: '荤素同价按斤称' },
  { id: 1009, stallId: 205, name: '土豆牛肉盖饭', price: 13, desc: '招牌人气' },
  { id: 1010, stallId: 205, name: '鱼香肉丝盖饭', price: 12, desc: '酸甜下饭' },
  { id: 1011, stallId: 206, name: '大众套餐', price: 10, desc: '两菜一汤' },
  { id: 1012, stallId: 207, name: '风味小炒', price: 12, desc: '现炒现卖' },
  { id: 1013, stallId: 208, name: '家常套餐', price: 11, desc: '每日换菜' },
  { id: 1014, stallId: 209, name: '拿铁', price: 9, desc: '现磨咖啡' },
  { id: 1015, stallId: 209, name: '美式', price: 5, desc: '学生党续命水' },
  { id: 1016, stallId: 210, name: '中国汉堡', price: 13, desc: '手擀现烤堡胚' },
  { id: 1017, stallId: 210, name: '香辣鸡腿堡', price: 15, desc: '经典款' },
  { id: 1018, stallId: 211, name: '冰鲜柠檬水', price: 4, desc: '永远的神' },
  { id: 1019, stallId: 211, name: '摩天脆脆冰淇淋', price: 3, desc: '课后甜品' },
  { id: 1020, stallId: 212, name: '疯狂星期四套餐', price: 29, desc: '周四限定' },
  { id: 1021, stallId: 213, name: '北区牛肉面', price: 12, desc: '北区人气' },
  { id: 1022, stallId: 214, name: '北区两荤一素', price: 12, desc: '自选搭配' },
  { id: 1023, stallId: 215, name: '北区麻辣烫', price: 13, desc: '按份计价' },
];

// 档口投票种子数据
const SEED_VOTES = {
  201: { good: 25, soso: 6, bad: 1 },
  202: { good: 18, soso: 9, bad: 2 },
  203: { good: 30, soso: 5, bad: 3 },
  204: { good: 22, soso: 8, bad: 1 },
  205: { good: 16, soso: 7, bad: 2 },
  206: { good: 14, soso: 8, bad: 1 },
  207: { good: 11, soso: 6, bad: 2 },
  208: { good: 20, soso: 5, bad: 0 },
  209: { good: 27, soso: 4, bad: 1 },
  210: { good: 33, soso: 6, bad: 1 },
  211: { good: 38, soso: 3, bad: 0 },
  212: { good: 29, soso: 7, bad: 2 },
  213: { good: 19, soso: 5, bad: 1 },
  214: { good: 15, soso: 6, bad: 1 },
  215: { good: 21, soso: 4, bad: 2 },
};

// 菜品投票种子数据
const DISH_SEED = {
  1001: { good: 21, soso: 4, bad: 0 }, 1002: { good: 12, soso: 6, bad: 1 },
  1003: { good: 15, soso: 5, bad: 1 }, 1004: { good: 17, soso: 8, bad: 1 },
  1005: { good: 11, soso: 7, bad: 2 }, 1006: { good: 24, soso: 4, bad: 2 },
  1007: { good: 19, soso: 5, bad: 1 }, 1008: { good: 18, soso: 9, bad: 1 },
  1009: { good: 26, soso: 3, bad: 0 }, 1010: { good: 14, soso: 6, bad: 1 },
  1011: { good: 10, soso: 8, bad: 1 }, 1012: { good: 13, soso: 5, bad: 1 },
  1013: { good: 16, soso: 4, bad: 0 }, 1014: { good: 22, soso: 3, bad: 0 },
  1015: { good: 19, soso: 4, bad: 1 }, 1016: { good: 28, soso: 5, bad: 0 },
  1017: { good: 20, soso: 7, bad: 1 }, 1018: { good: 35, soso: 2, bad: 0 },
  1019: { good: 26, soso: 4, bad: 1 }, 1020: { good: 23, soso: 8, bad: 2 },
  1021: { good: 18, soso: 4, bad: 1 }, 1022: { good: 14, soso: 7, bad: 1 },
  1023: { good: 20, soso: 5, bad: 2 },
};

// 教学楼教室分布（key = POIS 的 id；示例占位）
const BUILDINGS = {
  300: { name: '5号教学楼', floors: [
    { name: '1层', rooms: [
      { no: '101', type: '多媒体教室', cap: 120 }, { no: '102', type: '普通教室', cap: 80 },
      { no: '103', type: '普通教室', cap: 80 }, { no: '105', type: '教师办公室' } ] },
    { name: '2层', rooms: [
      { no: '201', type: '普通教室', cap: 80 }, { no: '202', type: '普通教室', cap: 80 },
      { no: '203', type: '语音教室', cap: 60 }, { no: '205', type: '教研室' } ] },
    { name: '3层', rooms: [
      { no: '301', type: '阶梯教室', cap: 200 }, { no: '302', type: '普通教室', cap: 80 },
      { no: '303', type: '普通教室', cap: 80 } ] },
    { name: '4层', rooms: [
      { no: '401', type: '机房', cap: 100 }, { no: '402', type: '普通教室', cap: 80 },
      { no: '403', type: '会议室' } ] },
  ] },
  301: { name: '4号教学楼', floors: [
    { name: '1层', rooms: [
      { no: '101', type: '普通教室', cap: 80 }, { no: '102', type: '普通教室', cap: 80 },
      { no: '103', type: '教师办公室' } ] },
    { name: '2层', rooms: [
      { no: '201', type: '多媒体教室', cap: 120 }, { no: '202', type: '普通教室', cap: 80 },
      { no: '203', type: '普通教室', cap: 80 } ] },
    { name: '3层', rooms: [
      { no: '301', type: '阶梯教室', cap: 180 }, { no: '302', type: '普通教室', cap: 80 } ] },
  ] },
  302: { name: '3号教学楼', floors: [
    { name: '1层', rooms: [
      { no: '101', type: '普通教室', cap: 80 }, { no: '102', type: '普通教室', cap: 80 } ] },
    { name: '2层', rooms: [
      { no: '201', type: '多媒体教室', cap: 120 }, { no: '202', type: '普通教室', cap: 80 } ] },
    { name: '3层', rooms: [
      { no: '301', type: '阶梯教室', cap: 160 }, { no: '302', type: '普通教室', cap: 80 } ] },
  ] },
  303: { name: '实验楼', floors: [
    { name: '1层', rooms: [
      { no: '101', type: '化学实验室' }, { no: '102', type: '化学实验室' }, { no: '103', type: '实验准备室' } ] },
    { name: '2层', rooms: [
      { no: '201', type: '物理实验室' }, { no: '202', type: '物理实验室' } ] },
    { name: '3层', rooms: [
      { no: '301', type: '生物实验室' }, { no: '302', type: '生物实验室' } ] },
    { name: '4层', rooms: [
      { no: '401', type: '计算机机房', cap: 100 }, { no: '402', type: '计算机机房', cap: 100 } ] },
  ] },
  304: { name: '信息楼', floors: [
    { name: '1层', rooms: [
      { no: '101', type: '报告厅', cap: 300 }, { no: '102', type: '值班室' } ] },
    { name: '2层', rooms: [
      { no: '201', type: '计算机机房', cap: 100 }, { no: '202', type: '计算机机房', cap: 100 },
      { no: '203', type: '网络中心' } ] },
    { name: '3层', rooms: [
      { no: '301', type: '多媒体教室', cap: 120 }, { no: '302', type: '多媒体教室', cap: 120 } ] },
  ] },
  305: { name: '图书馆', floors: [
    { name: '1层', rooms: [
      { no: '大厅', type: '总服务台' }, { no: '101', type: '密集书库' }, { no: '102', type: '自习区', cap: 150 } ] },
    { name: '2层', rooms: [
      { no: '201', type: '社科阅览室' }, { no: '202', type: '自习区', cap: 120 } ] },
    { name: '3层', rooms: [
      { no: '301', type: '自然科学阅览室' }, { no: '302', type: '电子阅览室', cap: 80 } ] },
    { name: '4层', rooms: [
      { no: '401', type: '研讨间' }, { no: '402', type: '研讨间' } ] },
  ] },
  307: { name: '北区2号教学楼', floors: [
    { name: '1层', rooms: [
      { no: '101', type: '普通教室', cap: 80 }, { no: '102', type: '普通教室', cap: 80 },
      { no: '103', type: '教师办公室' } ] },
    { name: '2层', rooms: [
      { no: '201', type: '多媒体教室', cap: 120 }, { no: '202', type: '普通教室', cap: 80 } ] },
    { name: '3层', rooms: [
      { no: '301', type: '阶梯教室', cap: 180 }, { no: '302', type: '普通教室', cap: 80 } ] },
    { name: '4层', rooms: [
      { no: '401', type: '实验室' }, { no: '402', type: '实验室' } ] },
  ] },
  308: { name: '北区图书馆', floors: [
    { name: '1层', rooms: [
      { no: '大厅', type: '总服务台' }, { no: '101', type: '自习区', cap: 200 } ] },
    { name: '2层', rooms: [
      { no: '201', type: '阅览室' }, { no: '202', type: '电子阅览室', cap: 60 } ] },
  ] },
};

// 分类元信息
const CATEGORY_META = {
  canteen:  { label: '餐厅',     icon: '🍜', color: '#e11d48' },
  snack:    { label: '小吃饮品', icon: '🍔', color: '#8b5cf6' },
  teaching: { label: '教学楼',   icon: '🏫', color: '#3b82f6' },
  dorm:     { label: '宿舍',     icon: '🛏️', color: '#10b981' },
  express:  { label: '快递',     icon: '📦', color: '#f59e0b' },
  shop:     { label: '超市',     icon: '🛒', color: '#ec4899' },
  bath:     { label: '浴室',     icon: '🚿', color: '#06b6d4' },
  office:   { label: '办公楼',   icon: '🏢', color: '#64748b' },
  sport:    { label: '体育',     icon: '⚽', color: '#f97316' },
  other:    { label: '其他',     icon: '📍', color: '#94a3b8' },
};

window.CAMPUS_DATA={CAMPUS_CENTER,POIS,STALLS,FOODS,BUILDINGS,STALL_CATS,CATEGORY_META};
})();
