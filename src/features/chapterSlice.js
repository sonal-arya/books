import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chapterList: [],
};
const chapterSlice = createSlice({
  name: "chapterSelect",
  initialState,
  reducers: {
    saveChapter: (state, action) => {
      state.chapterList.push(action.payload);
    },
    setSaveChapter:(state,action) =>{
      state.chapterList.map()
    }
  },
});
export const {saveChapter, setSaveChapter} = chapterSlice.actions
export const selectChapterList =  state => state.chapter.chapterList
export default chapterSlice.reducer
