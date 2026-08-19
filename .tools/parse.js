// 解析学生课表 xls，输出结构
const XLSX = require('xlsx');
const wb = XLSX.readFile('d:/AADownload/学生个人课表_2455040204.xls');
console.log('工作表:', wb.SheetNames);
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });
console.log('总行数:', rows.length);
// 打印前 12 行（前 10 列）看结构
rows.slice(0, 12).forEach((r, i) => {
  console.log(i, JSON.stringify(r.slice(0, 10)));
});
