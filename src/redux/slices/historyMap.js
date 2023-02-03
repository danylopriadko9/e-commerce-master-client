import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchHistory = createAsyncThunk(
  'news/fetchHistory',
  async (url) => {
    const language = localStorage.getItem('i18nextLng');
    if (url.includes('tovar_')) {
      const { data } = await axios.get(
        `/history/product/${url.replace('tovar_', '')}?lan=${language}`
      );
      return data;
    }
    if (url.includes('group_')) {
      const { data } = await axios.get(
        `/history/group/${url.replace('group_', '')}?lan=${language}`
      );
      return data;
    }
  }
);

const initialState = {
  history: {
    category_name: null,
    category_url: null,
    parent_id: null,
    parent_name: null,
    parent_url: null,
  },
  status: null,
  error: null,
};

export const historyMapSlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: {
    [fetchHistory.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchHistory.fulfilled]: (state, action) => {
      state.status = 'success';
      state.history = action.payload[0];
    },
    [fetchHistory.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export default historyMapSlice.reducer;
