import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TabItem {
  id: string;
  name: string;
  component: string; // 組件名稱
  order: number;     // 顯示順序
}

interface TabState {
  tabs: TabItem[];
  currentTabId: string;
  tabHistory: string[];
  tabSettings: {
    rememberLastTab: boolean;
    defaultTab: string;
  };
}

const initialState: TabState = {
  tabs: [
    { id: 'tab01', name: 'ABOUT', component: 'WorkCard', order: 1 },
    { id: 'tab02', name: 'EXPERIENCE', component: 'Experience', order: 2 },
    { id: 'tab03', name: 'SKILLS', component: 'Skills', order: 3 },
    { id: 'tab04', name: 'PROTFILO', component: 'Profile', order: 4 },
  ],
  currentTabId: 'tab01',
  tabHistory: ['tab01'],
  tabSettings: {
    rememberLastTab: true,
    defaultTab: 'tab01',
  },
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTabId = action.payload;
      if (state.tabSettings.rememberLastTab) {
        state.tabHistory.push(action.payload);
        // 保持歷史記錄在合理範圍內
        if (state.tabHistory.length > 10) {
          state.tabHistory.shift();
        }
      }
    },
    addTab: (state, action: PayloadAction<Omit<TabItem, 'order'>>) => {
      const newOrder = Math.max(...state.tabs.map(tab => tab.order)) + 1;
      state.tabs.push({ ...action.payload, order: newOrder });
    },
    removeTab: (state, action: PayloadAction<string>) => {
      state.tabs = state.tabs.filter(tab => tab.id !== action.payload);
      // 如果刪除的是當前選中的 tab，切換到第一個可用的 tab
      if (state.currentTabId === action.payload && state.tabs.length > 0) {
        state.currentTabId = state.tabs[0].id;
      }
    },
    reorderTabs: (state, action: PayloadAction<{ fromId: string; toId: string }>) => {
      const { fromId, toId } = action.payload;
      const fromIndex = state.tabs.findIndex(tab => tab.id === fromId);
      const toIndex = state.tabs.findIndex(tab => tab.id === toId);
      
      if (fromIndex !== -1 && toIndex !== -1) {
        const [movedTab] = state.tabs.splice(fromIndex, 1);
        state.tabs.splice(toIndex, 0, movedTab);
        
        // 重新分配 order
        state.tabs.forEach((tab, index) => {
          tab.order = index + 1;
        });
      }
    },
    setTabSettings: (state, action: PayloadAction<Partial<TabState['tabSettings']>>) => {
      state.tabSettings = { ...state.tabSettings, ...action.payload };
    },
    resetTabHistory: (state) => {
      state.tabHistory = [state.currentTabId];
    },
  },
});

export const { 
  setCurrentTab, 
  addTab, 
  removeTab, 
  reorderTabs,
  setTabSettings, 
  resetTabHistory 
} = tabSlice.actions;

export default tabSlice.reducer;
