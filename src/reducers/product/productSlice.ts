import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductState {
  products: Product[];
  searchQuery: string;
}

const initialState: ProductState = {
  products: [],
  searchQuery: '',
};

export const productSlice = createSlice({
  name: 'productSearch',
  initialState: initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      return { ...state, products: action.payload };
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      return { ...state, searchQuery: action.payload };
    },
  },
});

export const { setProducts, setSearchQuery } = productSlice.actions;

export default productSlice.reducer;
