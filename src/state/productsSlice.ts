import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrls } from "../constants";
import { InitialStateType } from "../types";

const fetchProducts = createAsyncThunk(
  'products/fetch-products', async(_, {rejectWithValue}) => {
    try {
      const response = await axios.get(apiUrls.getProducts);
      return response.data;
    } catch (err : any){
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

const initialState : InitialStateType =  {
  loading: false,
  products: [],
  counter: 0,
  isProductDetailOpen: false, 
  productToShow: {
    id: 0, 
    title: '', 
    price: 0, 
    description: '', 
    image: '', 
    creationAt: '', 
    updatedAt: '', 
    category: {
      id: 0, 
      name: '', 
      image: '', 
      creationAt: '', 
      updatedAt: '', 
    }, 
  },
  cart: [],
  isCheckoutOpen: false, 
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter = state.counter + 1;
    },
    hideProductDetail: (state) => {
      state.isProductDetailOpen = false;
    },
    showProductDetail: (state) => {
      state.isCheckoutOpen = false;
      state.isProductDetailOpen = true;
    },
    updateProductToShow: (state, action) => {
      state.productToShow = action.payload;
    },
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
      state.counter += 1;
    },
    hideCheckout: (state) => {
      state.isCheckoutOpen = false;
    },
    showCheckout: (state) => {
      state.isProductDetailOpen = false;
      state.isCheckoutOpen = true;
    },
    deleteProductFromCart: (state, action) => {
      let filteredCart = state.cart.filter((product) => product.id !== action.payload);
      state.cart = filteredCart;
      state.counter -= 1;
    }
  }, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.fulfilled,(state, action) => {
      state.loading = false;
      state.products = action.payload
    })
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProducts.rejected, (state) => {
      state.loading = false; 
    })
  },
});

export default productsSlice;
export { fetchProducts };
export const { 
  incrementCounter, 
  hideProductDetail,
  showProductDetail,
  updateProductToShow,
  addProductToCart,
  hideCheckout,
  showCheckout,
  deleteProductFromCart,
  } = productsSlice.actions;