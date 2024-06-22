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
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [
        ...state.products,
        { ...action.payload, id: uuid(), count: 1, isSell: false },
      ];
    },

    deliteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    editCount: (state, action) => {
      if (action.payload.info == "plus") {
        state.products = state.products.map((prod) => {
          if (prod.id == action.payload.id) {
            return { ...prod, count: prod.count + 1 };
          } else {
            if (prod.count < action.payload.id) {
              return { ...prod, count: prod.count - 1 };
            }
          }
        });
      } else {
      }
    },
  },
});

export const { addProduct, editCount, deliteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
