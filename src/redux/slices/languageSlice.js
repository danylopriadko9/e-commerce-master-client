import { createSlice } from '@reduxjs/toolkit';

const language =
  localStorage.getItem('i18nextLng') !== null
    ? localStorage.getItem('i18nextLng')
    : null;

const initialState = {
  language: language,
};

export const languageSlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
