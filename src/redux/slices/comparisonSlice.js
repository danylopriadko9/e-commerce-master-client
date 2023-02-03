import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchActualProductsCharacteristicsValue = createAsyncThunk(
  'compare/fetchActualProductsCharacteristicsValue',
  async (product_id) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/product/compare/${product_id}?lan=${language}`
    );
    return data;
  }
);

export const fetchActualCategoryCharacteristics = createAsyncThunk(
  'compare/fetchActualCategoryCharacteristics',
  async (category_url) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/category/characteristics/${category_url}?lan=${language}`
    );
    return data;
  }
);

export const fetchActualProductsProperties = createAsyncThunk(
  'compare/fetchActualProductsProperties',
  async (actual_filter_products) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.post(
      `/product/property-compare-products?lan=${language}`,
      {
        data: actual_filter_products.reduce((acc, val) => {
          acc.push(val.product_id);
          return acc;
        }, []),
      }
    );
    return data;
  }
);

const initialState = {
  compartisonProducts: [],
  categories: [],
  resultOfFilter: [],
  propertyProducts: [],
  actualCategoryCharacteristics: null,
  actualCategoryCharacteristicsStatus: null,
  actualProductsValues: null,
  actualProductsValuesStatus: null,
  error: null,
  propertyProductsStatus: null,
};

export const compartisonSlice = createSlice({
  name: 'compartison',
  initialState,
  reducers: {
    addCompartisonProduct: (state, action) => {
      if (
        !state.compartisonProducts.find((el) => el.url === action.payload.url)
      ) {
        state.compartisonProducts.push(action.payload);
      }

      if (
        !state.categories.find(
          (el) => el.category_id === action.payload.category_id
        )
      ) {
        state.categories.push({
          category_name: action.payload.category_name,
          category_id: action.payload.category_id,
          category_url: action.payload.category_url,
        });
      }
    },
    deleteCompartisonProduct: (state, action) => {
      state.compartisonProducts = state.compartisonProducts.filter(
        (el) => el.url !== action.payload.url
      );
      state.resultOfFilter = state.resultOfFilter.filter(
        (el) => el.url !== action.payload.url
      );
      state.categories = state.compartisonProducts.find(
        (el) => el.category_id === action.payload.category_id
      )
        ? state.categories
        : state.categories.filter(
            (el) => el.category_id !== action.payload.category_id
          );
    },
    setActualProductsCompartison: (state, action) => {
      state.resultOfFilter = state.compartisonProducts.filter(
        (el) => el.category_id === action.payload
      );
    },
  },
  extraReducers: {
    //==========================Получение значений характеристик
    [fetchActualProductsCharacteristicsValue.pending]: (state, action) => {
      state.actualProductsValuesStatus = 'loading';
      state.error = null;
    },
    [fetchActualProductsCharacteristicsValue.fulfilled]: (state, action) => {
      state.actualProductsValuesStatus = 'success';
      state.actualProductsValues = {
        ...state.actualProductsValues,
        ...action.payload,
      };
    },
    [fetchActualProductsCharacteristicsValue.rejected]: (state, action) => {
      state.error = 'error';
    },
    //==========================Получение характеристик категории
    [fetchActualCategoryCharacteristics.pending]: (state, action) => {
      state.actualCategoryCharacteristicsStatus = 'loading';
      state.error = null;
    },
    [fetchActualCategoryCharacteristics.fulfilled]: (state, action) => {
      state.actualCategoryCharacteristicsStatus = 'success';
      state.actualCategoryCharacteristics = action.payload;
    },
    [fetchActualCategoryCharacteristics.rejected]: (state, action) => {
      state.actualCategoryCharacteristicsStatus = 'error';
    },
    //==========================Получение продуктов которые покупают вместе
    [fetchActualProductsProperties.pending]: (state, action) => {
      state.propertyProductsStatus = 'loading';
      state.error = null;
    },
    [fetchActualProductsProperties.fulfilled]: (state, action) => {
      state.propertyProductsStatus = 'success';
      state.propertyProducts = action.payload;
    },
    [fetchActualProductsProperties.rejected]: (state, action) => {
      state.propertyProductsStatus = 'error';
    },
  },
});

export const {
  addCompartisonProduct,
  deleteCompartisonProduct,
  setActualProductsCompartison,
} = compartisonSlice.actions;
export default compartisonSlice.reducer;
