import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import dogsReducer from '../../dogs/store/dogsSlice'

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
