import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/tabSlice';
// import weatherReducer from './slices/weatherSlice';
// import appReducer from './slices/appSlice';

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    // weather: weatherReducer,
    // app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
