import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TabItem {
  id: string;
  name: string;
  component: string;
  order: number;
}

interface TabState {
  tabs: TabItem[];
  currentTabId: string;
}

const initialState: TabState = {
  tabs: [
    { id: 'tab01', name: 'ABOUT', component: 'WorkCard', order: 1 },
    { id: 'tab02', name: 'EXPERIENCE', component: 'Experience', order: 2 },
    { id: 'tab03', name: 'SKILLS', component: 'Skills', order: 3 },
    { id: 'tab04', name: 'PORTFOLIO', component: 'Profile', order: 4 },
  ],
  currentTabId: 'tab01',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTabId = action.payload;
    },
  },
});

export const { setCurrentTab } = tabSlice.actions;

export default tabSlice.reducer;
