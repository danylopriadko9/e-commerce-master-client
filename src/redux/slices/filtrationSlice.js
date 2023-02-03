import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCategoryParams = createAsyncThunk(
  'filtration/fetchCategoryParams',
  async (category_url) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/category/filter/category/${category_url}?lan=${language}`
    );
    return data;
  }
);

const initialState = {
  categoryParams: [],
  categoryValues: [],
  filtretionProducts: [],
  filtretionStatus: null,

  submitParams: {
    params: {},
    brands: [],
  },

  status: null,
  error: null,
};

export const filtrationSlice = createSlice({
  name: 'filtration',
  initialState,
  reducers: {
    changeParams: (state, action) => {
      console.log(action.payload);
      if (!Number(action.payload.value_id)) {
        delete state.submitParams.params[action.payload.characteristic_id];
      } else {
        state.submitParams.params = {
          ...state.submitParams.params,
          [action.payload.characteristic_id]: action.payload.value_id,
        };
      }
    },

    changeBrands: (state, action) => {
      if (!action.payload.checked) {
        state.submitParams.brands = state.submitParams.brands.filter(
          (el) => el !== action.payload.manufacturer_id
        );
      } else {
        state.submitParams.brands = [
          ...state.submitParams.brands,
          action.payload.manufacturer_id,
        ];
      }
    },

    cleanParams: (state, action) => {
      state.submitParams = {
        params: {},
        brands: [],
      };
    },
  },
  extraReducers: {
    // ---------------- get filtretion params
    [fetchCategoryParams.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCategoryParams.fulfilled]: (state, action) => {
      state.status = 'success';
      state.categoryParams = action.payload.characteriscics;
      state.categoryValues = action.payload.values;
    },
    [fetchCategoryParams.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});
export const { changeParams, changeBrands, cleanParams } =
  filtrationSlice.actions;
export default filtrationSlice.reducer;
