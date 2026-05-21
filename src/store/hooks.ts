import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// 使用類型化的 hooks 而不是普通的 useDispatch 和 useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(selector: (state: RootState) => TSelected): TSelected => 
  useSelector<RootState, TSelected>(selector);
