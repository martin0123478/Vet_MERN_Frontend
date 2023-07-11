import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'authenticated','not-authenticated',
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onCheking: (state) => {
      state.status = "cheking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, {}) => {
      state.status = "not-autenticated";
      state.user = {};
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onCheking, onLogin,onLogout } = authSlice.actions;
export default authSlice.reducer;
