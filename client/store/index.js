import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    user:"farmer",
    ordered: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userDetailsSlice.actions;

const store = configureStore({
  reducer: userDetailsSlice.reducer,
});

export default store;
