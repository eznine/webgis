// 解析教务课表 xls → 生成小程序 data/schedule.js
const XLSX = require('xlsx');
const fs = require('fs');

const wb = XLSX.readFile('d:/AADownload/学生个人课表_2455040204.xls');
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });

// ---- 周次表达式解析：'8' → [8]; '1-16' → 1..16; '1,3,5' → 列表; '1-6,8-14' → 合并 ----
function parseWeeks(expr) {
  const weeks = new Set();
  const parts = expr.split(',');
  for (const part of parts) {
    const m = part.match(/^(\d+)-(\d+)$/);
    if (m) {
      for (let i = +m[1]; i <= +m[2]; i++) weeks.add(i);
    } else if (/^\d+$/.test(part)) {
      weeks.add(+part);
    }
  }
  return [...weeks].sort((a, b) => a - b);
}

// ---- 节次解析：'[01-02节]' → start1,end2; '[09-10-11节]' → 9,10,11 ----
function parsePeriods(expr) {
  const nums = expr.replace(/\[|\]|节/g, '').split('-').map(Number);
  return { start: Math.min(...nums), end: Math.max(...nums), label: nums.join('-') };
}

// ---- 地点 → 教学楼 POI id 匹配 ----
function matchBuilding(loc) {
  if (/北区5A|北区5/.test(loc)) return 306;   // 北区5号教学楼
  if (/北区3/.test(loc)) return 310;          // 北区3号教学楼
  if (/北区2/.test(loc)) return 307;          // 北区2号教学楼
  if (/南区X|X217/.test(loc)) return 303;     // 实验楼
  if (/南区5/.test(loc)) return 300;          // 5号教学楼
  if (/南区4/.test(loc)) return 301;          // 4号教学楼
  if (/南区3/.test(loc)) return 302;          // 3号教学楼
  return null;                                 // 未收录
}

const DAY_NAMES = ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
const courses = [];
let id = 1;

for (let r = 3; r <= 7; r++) {                 // 五大节行
  const periodCell = rows[r][0] || '';
  for (let d = 1; d <= 7; d++) {               // 周一~周日
    const cell = (rows[r][d] || '').trim();
    if (!cell) continue;
    const blocks = cell.split(/\n\s*\n/);      // 多课程用空行分隔
    for (const block of blocks) {
      const lines = block.split('\n').map(s => s.trim()).filter(Boolean);
      if (!lines.length) continue;
      // 提取周次+节次：如 "8([周])[01-02节]" / "1-16([周])[03-04节]" / "9,11([周])[03-04节]"
      const weekLine = lines.find(l => l.includes('周'));
      if (!weekLine) continue;
      const wm = weekLine.match(/([\d,\-]+)\(\[周\]\)\[([\d\-]+)节\]/);
      if (!wm) continue;
      const weeks = parseWeeks(wm[1]);
      const periods = parsePeriods(wm[2]);
      // 地点 = 最后字段（含楼/室/区/号/馆/场），无则 ''
      const locLine = lines[lines.length - 1];
      const location = /楼|室|区|号|馆|场|中心/.test(locLine) ? locLine : '';
      // 字段顺序固定：课程名(0) / 老师(1) / 周次[节次](2..) / 地点(末尾)
      const teacher = lines[1] || '';
      const name = lines[0] || '';
      courses.push({
        id: id++,
        name,
        teacher,
        day: d,
        dayName: DAY_NAMES[d],
        start: periods.start,
        end: periods.end,
        periods: periods.label,
        weeks,
        location,
        buildingId: location ? matchBuilding(location) : null,
      });
    }
  }
}

const totalWeeks = Math.max(...courses.flatMap(c => c.weeks));
const out = `// ============================================================
// 课表数据（由 tools/parse-schedule.js 从教务 xls 自动生成）
// 学生：张鹏 2455040204 · 地理信息科学 · 2025-2026-2
// 换课表：把新导出的 xls 放到 d:/AADownload/ 后运行解析脚本
// ============================================================

const SCHEDULE = {
  student: '张鹏 · 2455040204 · 地理信息科学',
  term: '2025-2026-2',
  totalWeeks: ${totalWeeks},
  courses: ${JSON.stringify(courses, null, 2)},
};

module.exports = { SCHEDULE };
`;
fs.writeFileSync('F:/xcx/xcxwc/miniprogram/data/schedule.js', out);
console.log('课程总数:', courses.length);
console.log('总周数:', totalWeeks);
// 样例输出
console.log('样例:', JSON.stringify(courses.slice(0, 3), null, 1));
// 周次覆盖抽查
const weekHas = w => courses.filter(c => c.weeks.includes(w));
console.log('第1周课程数:', weekHas(1).length, '| 第8周:', weekHas(8).length, '| 第15周:', weekHas(15).length);
