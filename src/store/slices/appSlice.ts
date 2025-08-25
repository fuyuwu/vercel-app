import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean;
  theme: 'light' | 'dark';
  language: string;
  userPreferences: {
    notifications: boolean;
    autoSave: boolean;
    compactMode: boolean;
  };
  errors: Array<{
    id: string;
    message: string;
    type: 'error' | 'warning' | 'info';
    timestamp: Date;
  }>;
}

const initialState: AppState = {
  isLoading: false,
  theme: 'light',
  language: 'zh',
  userPreferences: {
    notifications: true,
    autoSave: true,
    compactMode: false,
  },
  errors: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setUserPreferences: (state, action: PayloadAction<Partial<AppState['userPreferences']>>) => {
      state.userPreferences = { ...state.userPreferences, ...action.payload };
    },
    addError: (state, action: PayloadAction<Omit<AppState['errors'][0], 'id' | 'timestamp'>>) => {
      const newError = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date(),
      };
      state.errors.push(newError);
    },
    removeError: (state, action: PayloadAction<string>) => {
      state.errors = state.errors.filter(error => error.id !== action.payload);
    },
    clearAllErrors: (state) => {
      state.errors = [];
    },
  },
});

export const {
  setLoading,
  setTheme,
  setLanguage,
  setUserPreferences,
  addError,
  removeError,
  clearAllErrors,
} = appSlice.actions;

export default appSlice.reducer;
