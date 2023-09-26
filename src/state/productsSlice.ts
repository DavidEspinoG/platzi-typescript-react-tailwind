import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrls } from "../constants";
import { State } from "../types";

const fetchProducts = createAsyncThunk(
  'products/fetch-products', async(_, {rejectWithValue}) => {
    try {
      const response = await axios.get(apiUrls.getProducts);
      return response.data;
    } catch (err){
      return rejectWithValue(err)
    }
  }
);

type Action = {
  payload : []
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    products: [],
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.fulfilled,(state, action) => {
      state.loading = false;
      state.products = action.payload
    })
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false; 
      // @ts-ignore
      state.products = action.payload;
    })
  },
});

export default productsSlice;
export { fetchProducts };