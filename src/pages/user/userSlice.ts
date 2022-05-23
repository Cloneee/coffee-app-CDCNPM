import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAPI } from "../../api";
import { IUserInfo } from "../../models";

export const fetchUserInfo = createAsyncThunk(
  "cart/fetchProducts",
  async (id: string) => await userAPI.getInfo(id)
)

export interface UserState {
  info: IUserInfo;
}

const initialState: UserState = {
  info: {} as IUserInfo,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUserInfo>) {
      state.info = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      // Add user to the state array
      state.info = action.payload;
    })
  },
});
export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
