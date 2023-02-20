import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface CartState {
  totalCount: number;
  productsList: Product[];
}

const initialState: CartState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
