import { configureStore } from '@reduxjs/toolkit';
import selectedChapterReducer from '../features/chapterSlice'
export const store = configureStore({
  reducer: {
    chapterSelect: selectedChapterReducer
  },
});
