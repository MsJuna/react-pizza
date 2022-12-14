import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    searchSlice
  }
})