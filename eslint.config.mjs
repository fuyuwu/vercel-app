import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', '.claude/**', 'coverage/**'],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      // eslint-plugin-react-hooks v7 新增的規則，把「effect 裡直接 setState」一律當
      // error（含最常見的 fetch 資料模式）。專案裡目前這樣寫的地方都是合理的資料抓取，
      // 降成 warning，不因為升級 lint 規則就強迫大改沒問題的既有邏輯。
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];
