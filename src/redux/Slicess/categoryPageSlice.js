import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCategoryProducts = createAsyncThunk(
  'category/fetchCategoryProducts',
  async ({ url, page }) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/api/page/category?lan=${language}&page=${page || 1}&groupUrl=${url}`
    );

    return data;
  }
);

export const fetchPropertyProducts = createAsyncThunk(
  'category/fetchproPertyProducts',
  async ({ url }) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/api/page/category-properties?groupUrl=${url}&lan=${language}`
    );

    console.log(data);

    return data;
  }
);

export const fetchFiltredProducts = createAsyncThunk(
  'category/fetchFiltredProducts',
  async ({ url, manufacturers, params, page }) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.post(
      `/api/page/filter?groupUrl=${url}&lan=${language}&page=${page}`,
      {
        manufacturers,
        params,
      }
    );

    console.log(data);

    return data;
  }
);

const initialState = {
  products: [],
  numberOfPages: null,
  error: null,
  status: null,
  //------
  propertyProducts: [],
  values: [],
  characteristics: {},
  manufacturers: [],
  propertyStatus: null,
  // filtration
  filtration: [],
  filteredManufacturers: [],
  params: {},
  filtrationStatus: null,
  // meta
  meta: {},
};

export const categoryPageSlice = createSlice({
  name: 'categoryPage',
  initialState,
  reducers: {
    manufacturersChange: (state, action) => {
      if (
        state.filteredManufacturers.filter((el) => el === action.payload).length
      ) {
        console.log(
          Boolean(state.filteredManufacturers.indexOf(action.payload)),
          action.payload
        );

        state.filteredManufacturers = state.filteredManufacturers.filter(
          (el) => el !== action.payload
        );
      } else {
        state.filteredManufacturers = [
          ...state.filteredManufacturers,
          action.payload,
        ];
      }
    },

    paramsChange: (state, action) => {
      // action.payload => property_id property_value_id
      if (action.payload.property_value_id) {
        state.params = {
          ...state.params,
          [action.payload.property_id]: action.payload.property_value_id,
        };
      } else {
        delete state.params[action.payload.property_id];
      }
    },

    clearParamsAndManufacturers: (state, action) => {
      state.params = {};
      state.filteredManufacturers = [];
    },
  },
  extraReducers: {
    // get search products
    [fetchCategoryProducts.pending]: (state, action) => {
      state.error = null;
      state.status = 'loading';
    },
    [fetchCategoryProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.numberOfPages = action.payload.pageQty;
      state.status = 'success';
    },
    [fetchCategoryProducts.rejected]: (state, action) => {
      state.status = 'error';
    },
    // get properties products
    [fetchPropertyProducts.pending]: (state, action) => {
      state.error = null;
      state.propertyStatus = 'loading';
    },
    [fetchPropertyProducts.fulfilled]: (state, action) => {
      state.propertyProducts = action.payload.products;
      state.values = action.payload.values;
      state.characteristics = action.payload.characteristics;
      state.manufacturers = action.payload.manufacturers;
      state.meta = action.payload.meta[0];

      state.propertyStatus = 'success';
    },
    [fetchPropertyProducts.rejected]: (state, action) => {
      state.propertyStatus = 'error';
    },
    // get filtrated product
    [fetchFiltredProducts.pending]: (state, action) => {
      state.error = null;
      state.filtrationStatus = 'loading';
    },
    [fetchFiltredProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.numberOfPages = action.payload.pageQty;
      state.filtrationStatus = 'success';
    },
    [fetchFiltredProducts.rejected]: (state, action) => {
      state.filtrationStatus = 'error';
    },
  },
});

export const {
  manufacturersChange,
  paramsChange,
  clearParamsAndManufacturers,
} = categoryPageSlice.actions;
export default categoryPageSlice.reducer;
