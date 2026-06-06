---
title: Markdown 完整語法展示
date: 2026-06-06
hero: /images/hero-4.jpg
excerpt: 一篇涵蓋所有 Markdown 語法的參考文章，包含標題、清單、表格、程式碼、引用等完整特性。
authors:
  - kwangsing3
tags:
  - Markdown
  - 工具
---

## 標題

```
# H1 標題
## H2 標題
### H3 標題
#### H4 標題
##### H5 標題
###### H6 標題
```

# H1 標題
## H2 標題
### H3 標題
#### H4 標題
##### H5 標題
###### H6 標題

---

## 文字樣式

| 語法 | 效果 |
|------|------|
| `**粗體**` | **粗體** |
| `*斜體*` | *斜體* |
| `***粗斜體***` | ***粗斜體*** |
| `~~刪除線~~` | ~~刪除線~~ |
| `` `行內程式碼` `` | `行內程式碼` |

---

## 段落與換行

這是第一段落。段落之間需要一個空行分隔。

這是第二段落。  
在行尾加兩個空格可以強制換行，但仍在同一段落內。

---

## 清單

### 無序清單

- 項目一
- 項目二
  - 子項目 A
  - 子項目 B
    - 更深的子項目
- 項目三

### 有序清單

1. 第一步
2. 第二步
   1. 子步驟 2-1
   2. 子步驟 2-2
3. 第三步

### 任務清單

- [x] 已完成的任務
- [x] 另一個完成項目
- [ ] 未完成的任務
- [ ] 待辦事項

---

## 引用

> 這是一段引用文字。
>
> 引用可以跨越多個段落。
>
> > 這是巢狀引用。
> >
> > > 可以繼續巢狀下去。

---

## 程式碼

### 行內程式碼

使用 `console.log("Hello, World!")` 印出訊息。

### 程式碼區塊（指定語言）

```javascript
// JavaScript 範例
function greet(name) {
  return `Hello, ${name}!`;
}

const result = greet("World");
console.log(result); // Hello, World!
```

```python
# Python 範例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print([fibonacci(i) for i in range(10)])
```

```bash
# Shell 指令
hugo server --bind 0.0.0.0 --port 1313
```

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}
```

---

## 連結

[一般連結](https://example.com)

[帶有 title 的連結](https://example.com "滑鼠移上去會顯示這段文字")

參考式連結：[Google][google-link]

[google-link]: https://www.google.com

自動連結：<https://example.com>

---

## 圖片

![替代文字](https://via.placeholder.com/600x200 "圖片 title")

參考式圖片：

![logo][site-logo]

[site-logo]: /images/favicon.svg

---

## 表格

| 欄位一 | 欄位二 | 欄位三 |
|--------|--------|--------|
| 資料 A | 資料 B | 資料 C |
| 資料 D | 資料 E | 資料 F |

### 對齊控制

| 靠左對齊 | 置中對齊 | 靠右對齊 |
|:---------|:--------:|---------:|
| Apple    | Banana   | Cherry   |
| 1        | 2        | 3        |
| 長一點的文字 | 中 | 短 |

---

## 水平分隔線

三種寫法，效果相同：

---

***

___

---

## 跳脫字元

用反斜線 `\` 跳脫特殊符號：

\*不會變成斜體\*

\`不會變成程式碼\`

\# 不會變成標題

可以跳脫的字元：`\ * _ { } [ ] ( ) # + - . !`

---

## 腳注

這裡有一個腳注[^1]，還有另一個[^note]。

[^1]: 這是第一個腳注的內容。

[^note]: 腳注可以有較長的說明，甚至包含多行內容。

---

## HTML 嵌入

Markdown 支援直接嵌入 HTML：

<details>
<summary>點我展開</summary>

這裡是隱藏的內容，使用 HTML `<details>` 元素實現。

</details>

<kbd>Ctrl</kbd> + <kbd>C</kbd> 複製

<mark>高亮文字</mark>

---

## 縮排式程式碼（舊式語法）

使用四個空格縮排也可以產生程式碼區塊：

    這是縮排產生的程式碼區塊
    不需要反引號

---

## 定義清單（部分解析器支援）

蘋果
: 一種紅色或綠色的水果

Markdown
: 一種輕量級標記語言，可以轉換為 HTML

---

## 綜合範例

以下是一個綜合所有語法的段落：

> **重點摘要：** 學習 Markdown 的 *三個關鍵步驟*：
>
> 1. 記住常用語法（`**粗體**`、`*斜體*`、`# 標題`）
> 2. 練習撰寫 `README.md`
> 3. 配合工具（如 [VS Code](https://code.visualstudio.com)）提升效率
>
> ```bash
> # 快速開始
> echo "# Hello Markdown" > README.md
> ```
