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
    message: ''
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
    .addCase(fetchProducts.rejected, (state) => {
      state.loading = false; 
    })
  },
});

export default productsSlice;
export { fetchProducts };