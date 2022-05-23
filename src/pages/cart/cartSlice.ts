import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productAPI } from "../../api";
import { ICartItem, IProduct } from "../../models";

export interface CartItemsState {
  products: IProduct[];
  listItems: ICartItem[];
  cartNumber: number;
  totalPrice: number;
}

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => await productAPI.getAll()
);

const initialState: CartItemsState = {
  products: [],
  listItems: [],
  cartNumber: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addNewOrderItemToOrder(state, action: PayloadAction<ICartItem>) {
      let isAdded = false;
      state.listItems.forEach((prod, i) => {
        if (prod.productId === action.payload.productId) {
          state.listItems[i].quantity += action.payload.quantity;
          isAdded = true;
        }
      });
      if (!isAdded) {
        state.listItems.push(action.payload);
      }
      state.cartNumber +=  action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    increaseCartItemCount(state, action: PayloadAction<string>) {
      state.listItems.forEach((prod, i) => {
        if (prod.productId === action.payload) {
          state.listItems[i].quantity++;
          state.cartNumber++;
          state.totalPrice += state.listItems[i].price;
        }
      });
    },
    decreaseCartItemCount(state, action: PayloadAction<string>) {
      state.listItems.forEach((prod, i) => {
        if (prod.productId === action.payload) {
          state.listItems[i].quantity--;
          state.cartNumber--;
          state.totalPrice -= state.listItems[i].price;
        }
      });
    },
    deleteCartItem(state, action: PayloadAction<string>) {
      state.listItems.forEach((prod, i) => {
        if (prod.productId === action.payload) {
          if (state.listItems.length === 1) {
            state.listItems = [];
            state.totalPrice = 0;
            state.cartNumber = 0;
          } else {
            state.listItems.splice(i, 1);
            state.totalPrice -= prod.price * prod.quantity;
            state.cartNumber -= prod.quantity;
          }
        }
      });
    },
    resetCart(state) {
      state.listItems = [];
      state.cartNumber = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.products = action.payload;
    })
  },
});
export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
