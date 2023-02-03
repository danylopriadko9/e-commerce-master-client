import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { calcTotalPrice } from '../../utils/countTotalPrice';

export const fetchCurrentCurrency = createAsyncThunk(
  'cart/fetchCurrentCurrency',
  async () => {
    const { data } = await axios.get('/currency');
    return data;
  }
);

export const fetchProductsByIds = createAsyncThunk(
  `product/fetchProductsByIds`,
  async (ids) => {
    const language = localStorage.getItem('i18nextLng');
    const { data } = await axios.post(`/product?lan=${language}`, { ids: ids });
    return data;
  }
);

const setItemsFunction = (items, totalPrice) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
};

const items =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const totalPrice =
  localStorage.getItem('totalPrice') !== null
    ? JSON.parse(localStorage.getItem('totalPrice'))
    : 0;

const initialState = {
  cartItems: [], // items
  productIds: items,
  totalPrice: totalPrice,
  showStatus: false,
  popupStatus: 'cart',
  currency: null,
  currencyStatus: null,
  cartItemsStatus: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (!state.productIds.find((el) => el.product_id === action.payload)) {
        state.productIds = [
          ...state.productIds,
          { product_id: action.payload, qty: 1 },
        ];
      } else {
        state.productIds = state.productIds.map((el) =>
          el.product_id === action.payload ? { ...el, qty: el.qty + 1 } : el
        );
      }

      // if (
      //   state.cartItems.find(
      //     (el) => el.product_id === action.payload.product_id
      //   )
      // ) {
      //   state.cartItems.forEach((item) => {
      //     if (item.product_id === action.payload.product_id) item.qty += 1;
      //   });
      // } else {
      //   state.cartItems.push(action.payload);
      // }

      // state.totalPrice = calcTotalPrice(state.cartItems, state.currency);
      // setItemsFunction(
      //   state.cartItems.map((item) => item),
      //   state.totalPrice
      // );
    },
    addQtyFromItem: (state, action) => {
      console.log(action.payload);
      state.productIds = state.productIds.map((item) =>
        item.product_id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      state.cartItems = state.cartItems.map((item) =>
        item.product_id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      state.totalPrice = calcTotalPrice(state.cartItems, state.currency);
      setItemsFunction(
        state.productIds.map((item) => item),
        state.totalPrice
      );
    },
    subtractQuantityFromItem: (state, action) => {
      state.productIds = state.productIds.map((item) =>
        item.product_id === action.payload
          ? { ...item, qty: item.qty - 1 }
          : item
      );

      state.cartItems = state.cartItems.map((item) =>
        item.product_id === action.payload
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      state.totalPrice = calcTotalPrice(state.cartItems, state.currency);
      setItemsFunction(
        state.productIds.map((item) => item),
        state.totalPrice
      );
    },
    getTotalPrice: (state, action) => {
      state.totalPrice = calcTotalPrice(state.cartItems, state.currency);
      setItemsFunction(
        state.productIds.map((item) => item),
        state.totalPrice
      );
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (el) => el.product_id !== action.payload
      );

      state.productIds = state.productIds.filter(
        (el) => el.product_id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.cartItems, state.currency);
      setItemsFunction(
        state.productIds.map((item) => item),
        state.totalPrice
      );
    },
    handelShowStatus: (state, action) => {
      state.showStatus = !state.showStatus;
    },
    handlePopupStatus: (state, action) => {
      state.popupStatus = action.payload; // cart | ofer
    },
  },
  extraReducers: {
    [fetchCurrentCurrency.pending]: (state, action) => {
      state.currencyStatus = 'loading';
      state.error = null;
    },
    [fetchCurrentCurrency.fulfilled]: (state, action) => {
      state.currencyStatus = 'success';
      state.currency = action.payload;
    },
    [fetchCurrentCurrency.rejected]: (state, action) => {
      state.currencyStatus = 'error';
    },
    //---------------- Продукты в корзине
    [fetchProductsByIds.pending]: (state, action) => {
      state.cartItemsStatus = 'loading';
      state.error = null;
    },
    [fetchProductsByIds.fulfilled]: (state, action) => {
      state.cartItemsStatus = 'success';
      state.cartItems = action.payload.map((el) => {
        return {
          ...el,
          qty: state.productIds.find((e) => e.product_id === el.product_id).qty,
        };
      });
    },
    [fetchProductsByIds.rejected]: (state, action) => {
      state.cartItemsStatus = 'error';
    },
  },
});

export const {
  addItemToCart,
  addQtyFromItem,
  subtractQuantityFromItem,
  removeItemFromCart,
  handelShowStatus,
  handlePopupStatus,
  getTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
