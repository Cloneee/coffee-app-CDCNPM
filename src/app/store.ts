import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../pages/cart/cartSlice';
import userReducer from '../pages/user/userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
