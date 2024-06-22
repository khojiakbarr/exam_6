import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const ProductSlice = createSlice({
  name: "products", // Type Actions
  initialState: {
    products: [
      {
        id: 0,
        productName: "ProductName",
        productPrice: 120,
        productDescription: "ProductDescription",
        productCategory: "ProductCategory",
        productImg:
          "https://istyle.hr/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_15_pink_pdp_image_position-1__en-us_1_1.jpg",
        isSell: true,
        count: 1,
      },
    ],
    isShipping: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [
        ...state.products,
        { ...action.payload, id: uuid(), count: 1, isSell: false },
      ];
    },

    remuveProduct: (state, action) => {
      state.products = state.products.map((prod) => {
        if (prod.id === action.payload.id) {
          return { ...prod, isSell: false, count: 1 };
        } else {
          return prod;
        }
      });
    },

    editCount: (state, action) => {
      state.products = state.products.map((prod) => {
        if (prod.id == action.payload.id) {
          if (action.payload.info == "plus") {
            return { ...prod, count: prod.count + 1 };
          } else if (action.payload.info == "minus") {
            if (prod.count > 1) {
              return { ...prod, count: prod.count - 1 };
            } else {
              return prod;
            }
          }
        } else {
          return prod;
        }
      });
    },

    addSell: (state, action) => {
      state.products = state.products.map((prod) => {
        if (prod.id === action.payload.id) {
          return { ...prod, isSell: true };
        } else {
          return prod;
        }
      });
    },
  },
});

export const { addProduct, editCount, remuveProduct, addSell } =
  ProductSlice.actions;

export default ProductSlice.reducer;
