import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";

const Store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export default Store;
