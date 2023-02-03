import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(`/category?lan=${language}`);
    return data;
  }
);

export const fetchProductsCategory = createAsyncThunk(
  'category/fetchProducsCategory',
  async (params) => {
    const { url, page } = params;
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/category/page/${url.replace('/group_', '')}/${page}?lan=${language}`
    );
    return data;
  }
);

export const getSubcategoriesInformation = createAsyncThunk(
  'category/getSubcategoriesInformation',
  async (url) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/category/subcategories/${url}?lan=${language}`
    );
    return data;
  }
);

export const getSubcategoriesFilterParams = createAsyncThunk(
  'category/getSubcategoriesFilterParams',
  async (url) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.get(
      `/category/manufacturers/${url}?lan=${language}`
    );
    return data;
  }
);

const initialState = {
  categories: [],
  actualPage: 1,
  productsCategory: {
    data: [],
    numberOfResult: null,
    numberOfPages: null,
  },
  actualCategory: null,
  actualSubcategories: [],
  actualSubcategoriesPage: [],
  actualSubcategoriesPageStatus: null,
  status: null,
  productsCategoryStatus: null,
  error: null,
  filterStatus: null,
  filterParams: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    searchActualCategory: (state, action) => {
      state.actualSubcategories = state.categories.filter(
        (el) => el.parent_id === action.payload
      );
      state.actualCategory = state.categories.filter(
        (el) => el.id === action.payload
      )[0];
    },

    actualSubcategoriesPageClean: (state, action) => {
      state.actualSubcategoriesPage = [];
    },

    increasePageNumber: (state, action) => {
      state.actualPage = state.actualPage + 1;
    },

    degreasePageNumber: (state, action) => {
      state.actualPage = state.actualPage - 1;
    },

    setPageNumber: (state, action) => {
      state.actualPage = action.payload;
    },

    setActualProducts: (state, action) => {
      state.productsCategory = action.payload;
    },
  },
  extraReducers: {
    //================================== DropDown Categories
    [fetchCategories.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = 'success';
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = 'error';
    },
    //================================== Products Category
    [fetchProductsCategory.pending]: (state, action) => {
      state.productsCategoryStatus = 'loading';
      state.error = null;
    },
    [fetchProductsCategory.fulfilled]: (state, action) => {
      state.productsCategoryStatus = 'success';
      state.productsCategory = action.payload;
    },
    [fetchProductsCategory.rejected]: (state, action) => {
      state.status = 'error';
    },
    //================================= getSubcategoriesInformation
    [getSubcategoriesInformation.pending]: (state, action) => {
      state.actualSubcategoriesPageStatus = 'loading';
      state.error = null;
    },
    [getSubcategoriesInformation.fulfilled]: (state, action) => {
      state.actualSubcategoriesPageStatus = 'success';
      state.actualSubcategoriesPage = action.payload;
    },
    [getSubcategoriesInformation.rejected]: (state, action) => {
      state.actualSubcategoriesPageStatus = 'error';
    },
    //================================= get filter params
    [getSubcategoriesFilterParams.pending]: (state, action) => {
      state.filterStatus = 'loading';
      state.error = null;
    },
    [getSubcategoriesFilterParams.fulfilled]: (state, action) => {
      state.filterStatus = 'success';
      state.filterParams = action.payload;
    },
    [getSubcategoriesFilterParams.rejected]: (state, action) => {
      state.filterStatus = 'error';
    },
  },
});

export const {
  searchActualCategory,
  actualSubcategoriesPageClean,
  increasePageNumber,
  degreasePageNumber,
  setPageNumber,
  setActualProducts,
} = categorySlice.actions;

export default categorySlice.reducer;
