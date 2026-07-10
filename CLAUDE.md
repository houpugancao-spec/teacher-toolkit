# teacher-toolkit — 我的班级工具总项目

## 对话开始时请先读
进度与最近更动都在 Obsidian：`Obsidian_claude/teacher-toolkit/工作笔记.md`

## 工作模式
- **加新工具**：对 Claude 说「我想做一个 XXX 工具」→ Claude 会建 `tools/<工具名>/` 子文件夹、引导我跟着视频做
- **结束工作**：对 Claude 说「**收工**」→ 自动 commit + push + 更新 Obsidian 工作笔记
- **接续工作**：对 Claude 说「告诉我上次做到哪」

## 工作桌 + 三个家
- 📋 GDrive 工作桌：`G:\我的云端硬盘\teacher-toolkit\`（自动跨电脑同步）
- 🐙 GitHub repo：`houpugancao-spec/teacher-toolkit`（公开，网页的家）
- 📘 Obsidian 驾驶舱：`Obsidian_claude/teacher-toolkit/工作笔记.md`（想法的家）
- 🔥 Firebase 项目：`houpu-teaching`（数据的家）

## 工具清单
（之后加新工具时会自动更新）
- **孔子听力单元《学而不厌》** `tools/kongzi/` — Y9 二语，手机自适应交互课件（听力+生词+配对+自测）。第1课已完成，共4课。学生成绩后端待接（Firebase `houpu-teaching` 或 Supabase，待定）。

## 工作注意事项
- 学生资料一律去识别化（只用座号 + 班级代号）
- commit 信息要写清楚做了什么 + 为什么
- 收工前说「收工」让 Claude 同步三方
