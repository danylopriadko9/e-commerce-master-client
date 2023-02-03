import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const language = localStorage.getItem('i18nextLng');
  const { data } = await axios.get(`/news?lan=${language}`);
  return data;
});

const initialState = {
  news: [],
  newsStatus: null,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.newsStatus = 'loading';
      state.error = null;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.newsStatus = 'success';
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state) => {
      state.newsStatus = 'error';
    },
  },
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;
