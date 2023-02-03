import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchActualProduct = createAsyncThunk(
  'product/fetchProduct',
  async (url) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios(`/product/one/${url}?lan=${language}`);
    return data;
  }
);

export const fetchPhotos = createAsyncThunk(
  'product/fetchPhotos',
  async (id) => {
    const { data } = await axios.get(`/product/photos/${id}`);
    return data;
  }
);

export const fetchReationProducts = createAsyncThunk(
  'product/fetchReationProducts',
  async (id) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios(`/product/properties/${id}?lan=${language}`);
    return data;
  }
);

export const fetchProductCharacteristics = createAsyncThunk(
  'product/fetchProductCharacteristics',
  async (id) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios(
      `/product/characteristics/${id}?lan=${language}`
    );
    return data;
  }
);

const initialState = {
  actualProduct: {
    product_name: '',
    url: '',
    base_price: 0,
    discount_percent: 0,
    currency_id: 1,
    description: '',
    meta_description: '',
    meta_title: '',
    meta_keywords: '',
    category_id: 0,
  },
  characteristics: [],
  photos: [],
  reationProducts: [],
  error: null,
  status: null,
  photoStatus: null,
  characteristicsStatus: null,
  reationStatus: null,
};

export const productPageSlice = createSlice({
  name: 'productPage',
  initialState,
  reducers: {
    cleanActualProduct: (state, action) => {
      state.actualProduct = [];
    },
    cleanActualPhotos: (state, action) => {
      state.photos = [];
    },
    hangleChangeDescription: (state, action) => {
      state.actualProduct.description = action.payload;
    },
    handleChange: (state, action) => {
      state.actualProduct[action.payload.name] = action.payload.text;
    },
  },
  extraReducers: {
    // Продукт страницы
    [fetchActualProduct.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchActualProduct.fulfilled]: (state, action) => {
      state.actualProduct = action.payload;
      state.status = 'success';
    },
    [fetchActualProduct.rejected]: (state, action) => {
      state.status = 'error';
    },
    // Фото продукта
    [fetchPhotos.pending]: (state, action) => {
      state.photoStatus = 'loading';
      state.error = null;
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload.map((el) => el.filename);
      state.photoStatus = 'success';
    },
    [fetchPhotos.rejected]: (state, action) => {
      state.photoStatus = 'error';
    },
    // Харастеристики продукта
    [fetchProductCharacteristics.pending]: (state, action) => {
      state.characteristicsStatus = 'loading';
      state.error = null;
    },
    [fetchProductCharacteristics.fulfilled]: (state, action) => {
      state.characteristics = action.payload;
      state.characteristicsStatus = 'success';
    },
    [fetchProductCharacteristics.rejected]: (state, action) => {
      state.characteristicsStatus = 'error';
    },
    // Продукты которые покупают вместе с этим продуктом
    [fetchReationProducts.pending]: (state, action) => {
      state.reationStatus = 'loading';
      state.error = null;
    },
    [fetchReationProducts.fulfilled]: (state, action) => {
      state.reationProducts = action.payload;
      state.reationStatus = 'success';
    },
    [fetchReationProducts.rejected]: (state, action) => {
      state.reationStatus = 'error';
    },
  },
});

export const { cleanActualProduct, cleanActualPhotos } =
  productPageSlice.actions;

export default productPageSlice.reducer;
