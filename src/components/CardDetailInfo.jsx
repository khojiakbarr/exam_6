import React from "react";
import remove_icon from "../assets/cart_cross_icon.png";
import { useDispatch } from "react-redux";
import { editCount, remuveProduct } from "../Store/Slices/ProductSlice";

export default function CardDetailInfo({ prod }) {
  const dispatch = useDispatch();

  function plusBtn() {
    dispatch(editCount({ id: prod.id, info: "plus" }));
  }
  function minusBtn() {
    dispatch(editCount({ id: prod.id, info: "minus" }));
  }

  function removeProductOne() {
    dispatch(remuveProduct({ id: prod.id }));
  }
  return (
    <div key={prod.id}>
      <div className="cartitems-format cartitems-format-main">
        <img
          src="https://istyle.hr/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_15_pink_pdp_image_position-1__en-us_1_1.jpg"
          alt="product name"
          className="carticon-product-icon"
        />
        <p>{prod.productName}</p>
        <p>${prod.productPrice}</p>
        <div className="cartitems-quantity flex items-center justify-center gap-[3px]">
          <button
            onClick={() => minusBtn()}
            className="p-[5px] bg-[#FF5A5A] text-white rounded-[30px]"
          >
            {" "}
            -{" "}
          </button>
          {prod.count}
          <button
            onClick={() => plusBtn()}
            className="p-[5px] bg-[#FF5A5A] text-white rounded-[30px]"
          >
            {" "}
            +{" "}
          </button>
        </div>
        <p>${prod.productPrice * prod.count}</p>
        <img
          onClick={() => removeProductOne()}
          src={remove_icon}
          className="cartitems-remove-icon cursor-pointer"
          alt=""
        />
      </div>
      <hr />
    </div>
  );
}
