# 🗺️ WebGIS 学习之旅

> 从二维到三维，从简单到复杂 —— 用 AI 辅助的 WebGIS 系统化学习项目
>
> 技术选型参考：[awesome-gis](https://github.com/sshuair/awesome-gis)

## 📚 学习路线

| 阶段 | 主题 | 技术栈 | 状态 |
|------|------|--------|------|
| 01 | 二维地图入门 | **Leaflet** | 🔄 进行中 |
| 02 | 地图交互工具 | Leaflet-Geoman、Leaflet.draw | ⬜ 未开始 |
| 03 | 空间分析 | **turf.js** | ⬜ 未开始 |
| 04 | 现代矢量渲染与 3D | **MapLibre GL JS** | ⬜ 未开始 |
| 05 | 三维地球 | **CesiumJS** | ⬜ 未开始 |

每个课程都是独立的 HTML 文件，直接用浏览器打开即可运行（依赖 CDN，需联网）。

## 📖 进度看板

打开 `index.html` 查看可视化学习进度（roadmap 风格），学习日志记录在 [PROGRESS.md](PROGRESS.md)。

## 🚀 快速开始

```bash
# 方式一：直接双击打开任意课程 HTML 文件

# 方式二：启动本地服务器（推荐，避免部分浏览器跨域限制）
npx serve .
```

## 📁 目录结构

```
webgis/
├── index.html                  # 学习进度看板（主页）
├── PROGRESS.md                 # 学习日志
├── lessons/
│   ├── 01-leaflet-basics/      # 阶段一：Leaflet 入门（4课）
│   ├── 02-interactive-tools/   # 阶段二：交互工具（2课）
│   ├── 03-spatial-analysis/    # 阶段三：空间分析（2课）
│   ├── 04-maplibre/            # 阶段四：MapLibre GL（2课）
│   └── 05-cesium/              # 阶段五：Cesium 三维（2课）
└── data/                       # 练习数据（GeoJSON 等）
```

## 🎯 学习方法（AI 辅助）

1. **先跑通**：打开课程文件，观察效果
2. **再改参数**：改坐标、颜色、数据，看变化
3. **提问题**：向 AI 提问每一行代码的作用
4. **做作业**：每课末尾有小作业，让 AI 批改你的实现
5. **记进度**：完成后更新 `index.html` 中的课程状态和 `PROGRESS.md`
