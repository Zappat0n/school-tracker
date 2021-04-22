import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import classroomTableReducer from './slices/classroomTableSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    classroomTable: classroomTableReducer,
  },
});

export default store;
