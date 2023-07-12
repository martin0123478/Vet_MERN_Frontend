import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import pacientesSlice from "./slices/pacients/pacientesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    pacientes:pacientesSlice
  },
});
