import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import keyboards from "../apis/keyboards";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "products/fetchData",
  async function () {
    const response = await axios.get(
      "https://61dc43d8591c3a0017e1a80b.mockapi.io/items"
    );

    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {
    // addItemToCart(state, action) {
    //   state.items = action.payload;
    // },
  },
  extraReducers: {
    [fetchData.pending.type]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchData.fulfilled.type]: (state, action) => {
      state.status = "loaded";
      state.items = action.payload;
    },
    [fetchData.rejected.type]: (state, action) => {},
  },
});

export const productsActions = productsSlice.actions;
// export const { fetchData } = productsSlice.actions;

export default productsSlice.reducer;
