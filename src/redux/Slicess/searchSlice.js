import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSearchProducts = createAsyncThunk(
  'search/fetchSearchProducts',
  async ({ searchValue, groupId, page, lan }) => {
    const language = lan || localStorage.getItem('i18nextLng');
    const url = groupId
      ? `/api/page/search?lan=${language}&src=${searchValue.trim()}&groupId=${groupId}&page=${
          page || 1
        }`
      : `/api/page/search?lan=${language}&src=${searchValue.trim()}&page=${
          page || 1
        }`;
    const { data } = await axios.get(url);

    return data;
  }
);

const initialState = {
  products: [],
  numberOfPages: null,
  error: null,
  status: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    // get search products
    [fetchSearchProducts.pending]: (state, action) => {
      state.error = null;
      state.status = 'loading';
    },
    [fetchSearchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.numberOfPages = action.payload.pageQty;
      state.status = 'success';
    },
    [fetchSearchProducts.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export default searchSlice.reducer;
