import { store } from './index';

// 從 store 推斷 RootState 和 AppDispatch 類型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 自定義 hooks 的類型
export interface TypedUseSelectorHook<TState> {
  <TSelected>(selector: (state: TState) => TSelected): TSelected;
}

export interface TypedUseDispatchHook<TState> {
  (): AppDispatch;
}
