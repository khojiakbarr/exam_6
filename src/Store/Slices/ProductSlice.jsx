import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const ProductSlice = createSlice({
  name: "products", // Type Actions
  initialState: {
    products: [
      {
        id: 0,
        ProductName: "ProductName",
        ProductPrice: "ProductPrice",
        ProductDescription: "ProductDescription",
        Productcategory: "Productcategory",
      },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [
        ...state.products,
        { ...action.payload, id: uuid(), count: 1 },
      ];
    },

    editCount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
    },
  },
});

export const { addProduct, editCount } = ProductSlice.actions;

export default ProductSlice.reducer;
