---
title: 日常開發的 Git 工作流程
date: 2026-06-03
hero: /images/hero-3.jpg
excerpt: 一套簡單、容易遵守的 Git 工作流程，適合個人專案與小型團隊。
authors:
  - kwangsing3
---

Git 的指令不難，難的是在團隊裡建立一致的習慣。這裡分享一套我日常使用的工作流程，簡單到可以在任何規模的專案裡落地。

## 分支策略

保持三種分支：

- `main`：永遠是可以部署的狀態
- `feature/*`：新功能開發
- `fix/*`：bug 修復

每次開發新功能都從 `main` 開一個新分支，完成後再 merge 回去。

## Commit 訊息格式

好的 commit 訊息讓 `git log` 變成文件：

```
<type>: <簡短描述>

<選填：詳細說明>
```

type 常用的幾種：

| type | 用途 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修 bug |
| `refactor` | 重構，不影響行為 |
| `docs` | 文件 |
| `chore` | 雜項（更新依賴、設定等） |

## 常用指令速查

```bash
# 建立並切換到新分支
git checkout -b feature/my-feature

# 暫存目前變更，切去處理緊急修復
git stash
git checkout -b fix/urgent-bug

# 修完後回到原本的工作
git checkout feature/my-feature
git stash pop

# 互動式選擇要 commit 的內容
git add -p
```

## Pull Request 的習慣

PR 合併前我會自問三件事：

1. CI 是否全部通過？
2. 這個 PR 是否只做一件事？
3. commit 訊息是否讓三個月後的自己看得懂？

養成這個習慣後，review 速度快很多，merge 後出問題也容易追蹤。
