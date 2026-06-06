---
title: 用 Hugo 建立靜態網站
date: 2026-06-01
hero: /images/hero-2.jpg
excerpt: Hugo 是目前最快的靜態網站生成器之一，從安裝到第一個頁面上線只需要幾分鐘。
authors:
  - kwangsing3
tags:
  - Hugo
  - 靜態網站
---

Hugo 是一個用 Go 語言撰寫的靜態網站生成器，以速度著稱。即使網站有上千篇文章，build 時間通常也在幾秒內完成。

## 為什麼選擇 Hugo

靜態網站沒有資料庫，也不需要伺服器端執行環境，帶來幾個明顯的好處：

- **速度快**：純靜態檔案，CDN 可以直接快取
- **安全**：沒有後端，攻擊面極小
- **低成本**：GitHub Pages、Cloudflare Pages 都可以免費部署

## 基本結構

一個 Hugo 專案的核心目錄如下：

```
.
├── content/       # 文章與頁面的 Markdown 檔案
├── layouts/       # HTML 模板
├── static/        # 靜態資源（圖片、CSS、JS）
├── themes/        # 主題
└── hugo.toml      # 設定檔
```

## 寫第一篇文章

建立新文章只需要一個指令：

```bash
hugo new post/my-first-post.md
```

Hugo 會自動填入日期與預設 frontmatter，接著用任何編輯器打開 Markdown 檔案開始寫作即可。

## 本地預覽

```bash
hugo server -D
```

加上 `-D` 參數會同時顯示 draft 狀態的文章，方便寫作時預覽效果。
