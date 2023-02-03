import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSearchItems = createAsyncThunk(
  'search/fetchSearchItems',
  async ({ searchValue, groupUrl, page }) => {
    const language = localStorage.getItem('i18nextLng');
    if (groupUrl) {
      const { data } = await axios.get(
        `search/${groupUrl}/${searchValue}/${page}?lan=${language}`
      );
      return data;
    } else {
      const { data } = await axios.get(
        `search/${searchValue}/${page}?lan=${language}`
      );
      return data;
    }
  }
);

const initialState = {
  actualSearchItems: [],
  searchValue: '',
  status: null,
  error: null,
  type: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [fetchSearchItems.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchSearchItems.fulfilled]: (state, action) => {
      state.actualSearchItems = action.payload;
      state.status = 'success';
    },
    [fetchSearchItems.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
