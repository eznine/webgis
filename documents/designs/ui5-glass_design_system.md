# 校园导览 · 玻璃拟态设计系统（提取自 UI-5 参考图）

> 约束：地图底图为腾讯官方瓦片，不可更换。本系统仅规范悬浮层。
> 落地平台：微信小程序 WXSS（rpx 单位）

## 色彩

| Token | 值 | 用途 |
|---|---|---|
| glass-bg | rgba(255,255,255,0.55) | 玻璃面板背景 |
| glass-border | rgba(255,255,255,0.7) 1.5rpx | 玻璃亮边 |
| glass-shadow | 0 10rpx 36rpx rgba(15,23,42,0.14) | 投影 |
| text-primary | #0f172a | 标题 |
| text-secondary | #64748b | 描述 |
| text-tertiary | #94a3b8 | 辅助 |
| accent | #00b578 / 渐变 #2dd4a7→#00b578 | 主操作（导航钮） |
| cat-red | #e11d48 | 食堂 |
| cat-blue | #3b82f6 | 教学楼 |
| cat-green | #10b981 | 宿舍 |
| cat-amber | #f59e0b | 快递 |
| cat-violet | #8b5cf6 | 景观 |
| cat-pink | #ec4899 | 超市 |

## 材质（玻璃配方）

```
background: rgba(255,255,255,.55);
backdrop-filter: blur(36rpx) saturate(1.6);
border: 1.5rpx solid rgba(255,255,255,.7);
box-shadow: 0 10rpx 36rpx rgba(15,23,42,.14);
border-radius: 28~36rpx（卡片）/ 999rpx（胶囊）
```

## 组件状态（参考图核心模式）

- **开关/胶囊**：未选中=空心彩点+玻璃底；选中=实心彩点+深色玻璃底+彩点外发光
- **FAB**：玻璃底 + 彩色光环（box-shadow ring）+ 图标下小字标签
- **信息卡（选点横条）**：渐变图标 + 主/副双行文字 + 圆形主操作钮，紧凑单行
- **信息针（地图标记）**：3D 质感位图（球面径向渐变+镜面高光+地面投影）

## 字阶 / 间距

- 标题 31-34rpx/800 · 正文 27-29rpx/600 · 辅助 22-24rpx
- 组件内边距 20-26rpx · 组件间距 12-20rpx · 卡片圆角 28-36rpx

## 动效

- 面板入场：slideUp 0.25s ease-out（translateY 40rpx + 淡入）
- 按钮点按：scale 0.96
