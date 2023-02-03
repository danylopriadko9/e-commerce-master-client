import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { calcTotalPrice } from '../../utils/countTotalPrice';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (ids) => {
    console.log(ids);
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.post(`/api/products?lan=${language}`, {
      productIds: ids,
    });

    return data.products;
  }
);

export const fetchCurrency = createAsyncThunk(
  'home/fetchCurrency',
  async () => {
    const { data } = await axios.get(`http://localhost:8000/currency`);
    return data;
  }
);

const initialState = {
  //----------- Cart
  cartProducts: [],
  cartProductsIdsQty: [],
  test: [],
  totalPrice: null,

  status: null,
  error: null,

  //--currency
  currency: [],
  currencyStatus: null,
};

export const cartSlice2 = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload);
      if (
        state.cartProductsIdsQty.find(
          (el) => el.product_id === action.payload.product_id
        )
      ) {
        state.cartProducts = state.cartProducts.map((e) =>
          e.product_id === action.payload.product_id
            ? { ...e, qty: e.qty + 1 }
            : e
        );
        state.cartProductsIdsQty = state.cartProductsIdsQty.map((e) =>
          e.product_id === action.payload.product_id
            ? { ...e, qty: e.qty + 1 }
            : e
        );
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          { ...action.payload, qty: 1 },
        ];
        state.cartProductsIdsQty = [
          ...state.cartProductsIdsQty,
          { product_id: action.payload.product_id, qty: 1 },
        ];
      }
      console.log(state.cartProducts);
      state.totalPrice = calcTotalPrice(state.cartProducts, state.currency);
    },

    setProductQty: (state, action) => {
      state.cartProducts = state.cartProducts.map((el) =>
        el.product_id === action.payload.product_id
          ? { ...el, qty: action.payload.itemQty }
          : el
      );
      state.cartProductsIdsQty = state.cartProductsIdsQty.map((el) =>
        el.product_id === action.payload.product_id
          ? { ...el, qty: action.payload.itemQty }
          : el
      );

      state.totalPrice = calcTotalPrice(state.cartProducts, state.currency);
    },

    deleteProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (el) => el.product_id !== action.payload
      );
      state.cartProductsIdsQty = state.cartProductsIdsQty.filter(
        (el) => el.product_id !== action.payload
      );

      state.totalPrice = calcTotalPrice(state.cartProducts, state.currency);
    },
  },
  extraReducers: {
    // ---------- get and seporate home information
    [fetchCartItems.pending]: (state, action) => {
      state.error = null;
      state.status = 'loading';
    },
    [fetchCartItems.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
      state.status = 'success';
    },
    [fetchCartItems.rejected]: (state, action) => {
      state.status = 'error';
    },
    //get actual currency
    [fetchCurrency.pending]: (state, action) => {
      state.error = null;
      state.currencyStatus = 'loading';
    },
    [fetchCurrency.fulfilled]: (state, action) => {
      state.currency = action.payload;
      state.currencyStatus = 'success';
    },
    [fetchCurrency.rejected]: (state, action) => {
      state.currencyStatus = 'error';
    },
  },
});

export const { addItemToCart, deleteProductFromCart, setProductQty } =
  cartSlice2.actions;
export default cartSlice2.reducer;
