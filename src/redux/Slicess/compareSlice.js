import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCompageInformation = createAsyncThunk(
  'compare/fetchCompageInformation',
  async ({ productIds, categoriesIds }) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.post(`/api/page/compare?lan=${language}`, {
      productIds,
      categoriesIds,
    });

    console.log(data);

    return data;
  }
);

const initialState = {
  //array with products. products obj contains params and product info orded by desc by property_id
  categoryCharacteristics: [],
  productsCharacteristics: [],
  productsInfo: [],
  categoryInfo: [],
  relationProducts: [],
  // array with categories information: name and characteristics
  categories: [],
  productIds: [49, 14, 71, 72],
  categoriesIds: [3, 13],
  error: null,
  status: null,
};

export const compareSlice = createSlice({
  name: 'compareSlice',
  initialState,
  reducers: {
    addProductToCompare: (state, action) => {
      if (
        !state.productIds.filter(
          (el) => Number(el) === Number(action.payload.product_id)
        ).length
      ) {
        state.productIds = [...state.productIds, action.payload.product_id];
      }

      if (
        !state.categoriesIds.filter(
          (el) => Number(el) === action.payload.category_id
        ).length
      ) {
        state.categoriesIds = [
          ...state.categoriesIds,
          action.payload.category_id,
        ];
      }
    },

    deleteCompareItem: (state, action) => {
      //action payload => action.payload.product_id && action.payload.category_id
      state.productIds = state.productIds.filter(
        (el) => Number(el) !== Number(action.payload.product_id)
      );
      state.productsInfo = state.productsInfo.filter(
        (el) => Number(el.product_id) !== Number(action.payload.product_id)
      );

      if (
        !state.productsInfo.filter(
          (el) => el.category_id === action.payload.category_id
        ).length
      ) {
        state.categoriesIds = state.categoriesIds.filter(
          (el) => el !== action.payload.category_id
        );
        state.categoryInfo = state.categoryInfo.filter(
          (el) => el.category_id !== action.payload.category_id
        );

        state.categoryCharacteristics = state.categoryCharacteristics.filter(
          (el) => el.category_id !== action.payload.category_id
        );
      }
    },

    clearAll: (state, action) => {
      state.productsInfo = [];
      state.categoryInfo = [];
      state.categoryCharacteristics = [];
      state.productsCharacteristics = [];
      state.relationProducts = [];
      state.categories = [];
      state.productIds = [];
      state.categoriesIds = [];
    },
  },
  extraReducers: {
    [fetchCompageInformation.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCompageInformation.fulfilled]: (state, action) => {
      state.status = 'success';
      state.categoryCharacteristics = action.payload.categoryCharacteristics;
      state.productsCharacteristics = action.payload.productsCharacteristics;
      state.productsInfo = action.payload.productsInfo;
      state.categoryInfo = action.payload.categoryInfo;
      state.relationProducts = action.payload.relationProducts;
    },
    [fetchCompageInformation.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export const { addProductToCompare, deleteCompareItem, clearAll } =
  compareSlice.actions;
export default compareSlice.reducer;
