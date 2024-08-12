import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface items {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface cartState {
  items: items[];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (
      state,
      action: PayloadAction<{ name: string; price: number; quantity: number }>
    ) => {
      // state.items.push({
      //     id: state.items.length,
      //     name: action.payload.name,
      //     price: action.payload.price,
      //     quantity: 1,
      // });
      if (state.items.length === 0) {
        state.items.push({
          id: state.items.length,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        });
      } else {
        const index = state.items.findIndex(
          (item) => item.name === action.payload.name
        );
        if (index !== -1) {
          state.items[index].quantity += 1;
        } else {
          state.items.push({
            id: state.items.length,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
          });
        }
      }
    },
    removeCart: (state, action: PayloadAction<{ name: string }>) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      state.items.splice(index, 1);
    },
  },
});

export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;