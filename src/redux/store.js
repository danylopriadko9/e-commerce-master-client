import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import newsReducer from './slices/newsSlice';
import cartReducer from './slices/cartSlice';
import productPageReducer from './slices/productPageSlice';
import historyMapReducer from './slices/historyMap';
import compartisonReducer from './slices/comparisonSlice';
import searchReducer from './slices/searchSlice';
import filtrationReducer from './slices/filtrationSlice';
import productsReducer from './slices/productsSlice';
import adminReducer from './slices/adminSlice';
import languageReducer from './slices/languageSlice';
import homeReducer from './Slicess/homeSlice';
import cart2Reducer from './Slicess/cartSlice2';
import search2Reducer from './Slicess/searchSlice';
import categoryPageReducer from './Slicess/categoryPageSlice';
import comparePageReducer from './Slicess/compareSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    news: newsReducer,
    cart: cartReducer,
    actualProduct: productPageReducer,
    history: historyMapReducer,
    compartison: compartisonReducer,
    search: searchReducer,
    filter: filtrationReducer,
    products: productsReducer,
    admin: adminReducer,
    //------------
    language: languageReducer,
    home: homeReducer,
    cart2: cart2Reducer,
    search2: search2Reducer,
    categoryPage: categoryPageReducer,
    comparePage: comparePageReducer,
  },
});

export default store;
