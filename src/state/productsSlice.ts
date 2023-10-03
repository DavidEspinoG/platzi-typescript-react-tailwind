import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrls } from "../constants";


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

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    products: [],
    message: '',
    counter: 0,
    isProductDetailOpen: false, 
  },
  reducers: {
    incrementCounter: (state) => {
      state.counter = state.counter + 1;
    },
    hideProductDetail: (state) => {
      state.isProductDetailOpen = false;
    },
    showProductDetail: (state) => {
      state.isProductDetailOpen = true;
    },
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
  } = productsSlice.actions;