# 📱 校园生活地图 · 微信小程序

> v0.1 · 食堂档口点评 + 校园地图 + 今天吃什么
> 数据本地存储（无后端、零成本），代码在 `f:\webgis\miniprogram\`

## 首次运行（约 10 分钟）

1. **下载微信开发者工具**（稳定版）：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
2. 打开工具 → 项目列表 → 导入 → 选择 `f:\webgis\miniprogram` 目录
3. AppID 选择「测试号」（游客模式），项目即可在**模拟器**中运行
4. 真机预览需要正式 AppID：到 https://mp.weixin.qq.com 注册个人小程序（免费），把 `project.config.json` 里的 `"touristappid"` 替换成你的 AppID，再用手机扫码预览

## 填真实数据（上线前必做）

编辑 `data/campus.js`（全校唯一需要维护的文件）：

| 要改什么 | 怎么做 |
|---|---|
| `CAMPUS_CENTER` | 打开 https://lbs.qq.com/getPoint/ 搜"山西师范大学"，复制坐标 |
| `POIS` 各点位坐标 | 同上，逐个点位拾取（注意坐标是 [纬度, 经度] 顺序，拾取器给的是 [经度, 纬度]，**需要调换**） |
| `STALLS` 档口信息 | 实地拍菜单整理 |
| `SEED_VOTES` | 清零或改为真实统计 |

⚠️ 坐标系提醒：腾讯坐标拾取器返回 GCJ-02，小程序地图也是 GCJ-02，直接匹配无需转换。

## 路线图

- [x] v0.1 地图 + 食堂档口 + 三键投票（本地）+ 今天吃什么
- [ ] v0.2 真实校园数据（实地采集）
- [ ] v0.3 投票云端共享（接入云开发或自建后端）
- [ ] v0.4 注册 AppID、提交审核、上架
- [ ] v1.0 赏花地图、跑步路线（复用底图数据）
