# fufu-blog (vercel-app)

個人部落格，Next.js 16 App Router，部署於 Vercel。

## 技術棧

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript（strict mode）
- **State**: Redux Toolkit + React Redux
- **Styling**: styled-components v5 + SASS + classnames
- **Runtime**: React 19
- **測試**: Vitest + Testing Library

## 常用指令

```bash
npm run dev        # 啟動開發伺服器
npm run build      # 生產打包
npm run start      # 啟動生產伺服器
npm run lint       # ESLint（eslint.config.mjs，flat config）
npm run typecheck  # tsc --noEmit
npm test           # Vitest
```

## 專案結構

```
src/
  App.tsx         # 根元件
  components/     # 共用 UI 元件
  core/           # 核心邏輯/資料
  store/          # Redux store 設定

app/              # Next.js App Router 路由
public/           # 靜態資源
```

## 開發慣例

- 樣式優先使用 styled-components，搭配 SASS 變數
- classnames 套件處理條件式 class
- Redux Toolkit slice 放在 `src/store/`
- 元件放在 `src/components/`，業務邏輯放 `src/core/`
