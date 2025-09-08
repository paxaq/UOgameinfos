# Unicorn Overlord 职业系统指南

一个简洁的静态站点，用于浏览 Unicorn Overlord 的职业信息、克制关系与交互示例（中文界面）。

## 在线预览
- 将通过 GitHub Pages 自动部署：`https://paxaq.github.io/UOgameinfos/`
- 首次部署需等待 ~1–2 分钟生效。

## 本地开发
- 启动本地服务器（任一静态服务器均可）：
  - `python3 -m http.server 8000` → 打开 `http://localhost:8000`

## 项目结构
- `index.html` — 主页面与导航锚点。
- `styles.css` — 全局样式、响应式与动画。
- `script.js` — 交互逻辑（职业卡片、平滑滚动、关系渲染）。

## 贡献指南
- 请阅读 `AGENTS.md`（Repository Guidelines）：
  - 代码风格、命名规则、测试要点与 PR 模板。
  - 修改选择器/锚点前，请同步调整 `script.js`。

## 部署
- 已配置 GitHub Actions 自动部署到 Pages。
- 每次合入 `main` 分支会触发一次发布。

## 许可
- 如需添加许可证，请在 Issue 中提出偏好（MIT/Apache-2.0 等）。
