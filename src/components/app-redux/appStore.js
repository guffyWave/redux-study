import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import uiSlice from './uiSlice';
import productsSlice from './productsSlice';
import quotesSlice from './quotesSlice';

const appStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    uiManager: uiSlice.reducer,
    productsManager: productsSlice.reducer,
    qoutesManager: quotesSlice.reducer,
  },
});

export default appStore;
