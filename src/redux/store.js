import { configureStore } from '@reduxjs/toolkit';

import languageReducer from './Slicess/languageSlice';
import homeReducer from './Slicess/homeSlice';
import cartReducer from './Slicess/cartSlice2';
import searchReducer from './Slicess/searchSlice';
import categoryPageReducer from './Slicess/categoryPageSlice';
import comparePageReducer from './Slicess/compareSlice';

export const store = configureStore({
  reducer: {
    //------------
    language: languageReducer,
    home: homeReducer,
    cart: cartReducer,
    search: searchReducer,
    categoryPage: categoryPageReducer,
    comparePage: comparePageReducer,
  },
});

export default store;
