---
title: 五個讓 TypeScript 更好用的技巧
date: 2026-06-05
hero: /images/hero-4.jpg
excerpt: TypeScript 不只是加型別而已，這五個技巧能讓程式碼更簡潔、更安全。
authors:
  - kwangsing3
tags:
  - TypeScript
  - 前端
---

用 TypeScript 一段時間後，會發現很多人只是把它當「會報錯的 JavaScript」在用。其實善用型別系統可以少寫很多防禦性程式碼。

## 1. 用 `satisfies` 取代直接型別標注

`satisfies` 讓你在保留推斷型別的同時驗證結構：

```typescript
const config = {
  port: 3000,
  host: "localhost",
} satisfies Record<string, string | number>;

// port 的型別是 number，而不是 string | number
config.port.toFixed(2);
```

## 2. 善用 Template Literal Types

字串型別可以組合：

```typescript
type EventName = "click" | "focus" | "blur";
type Handler = `on${Capitalize<EventName>}`;
// "onClick" | "onFocus" | "onBlur"
```

適合用在 event handler、CSS class 名稱等有規律的字串。

## 3. `const` assertion 鎖定字面量型別

```typescript
const DIRECTIONS = ["north", "south", "east", "west"] as const;
type Direction = typeof DIRECTIONS[number];
// "north" | "south" | "east" | "west"
```

不需要手動維護 union type，陣列就是 single source of truth。

## 4. 用 `infer` 從型別中提取資訊

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

async function fetchUser() {
  return { id: 1, name: "Alice" };
}

type User = Awaited<ReturnType<typeof fetchUser>>;
// { id: number; name: string }
```

## 5. Discriminated Union 取代 boolean flag

與其用多個 boolean 描述狀態，不如用 union：

```typescript
// 不好
type State = {
  loading: boolean;
  error: string | null;
  data: User | null;
};

// 好
type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: User };
```

後者讓 TypeScript 能正確縮窄型別，`switch` 裡每個 case 都能拿到正確的欄位。
