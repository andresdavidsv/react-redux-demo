import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user/userSlice';
import cartReducer from '../reducers/cart/cartSlice';
import productReducer from '../reducers/product/productSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
