import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
  items: [],
  totalQuantity: 0,
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState(),
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          imageUrl: newItem.imageUrl,
        });
      } else {
        // თუ არსებობს ვცვლით მარტო:
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;

      // figure out how many items are in array

      // check if exists
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      //   state.totalAmount = state.items.price - id.price;
      // if we have 1 item, we remove item entirely
      if (existingItem.quantity === 1) {
        // this overrides our array with new array without this item
        state.items = state.items.filter((item) => item.id !== id); // we keep all items where ids do not match with id we trying to remove

        // if > 1, we reduce quantity by one
      } else {
        existingItem.quantity--;
        // and update totalPrice
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    reset: (state) => initialState(),
  },
});

// export const cartActions = cartSlice.actions;
export const { addItemToCart, removeItemFromCart, removeItem, reset } =
  cartSlice.actions;

export default cartSlice.reducer;
