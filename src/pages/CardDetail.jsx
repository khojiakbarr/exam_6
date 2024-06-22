import { useSelector } from "react-redux";
import remove_icon from "../assets/cart_cross_icon.png";

import { v4 as uuid } from "uuid";
const CardDetail = () => {
  const products = useSelector((state) => state.product.products);
  const selProduct = products.filter((product) => product.isSell == true);
  

  return (
    <div>
      <div className="carditems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {selProduct.map((prod) => (
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
                <button className="p-[5px] bg-[#FF5A5A] text-white rounded-[30px]">
                  {" "}
                  -{" "}
                </button>
                {prod.count}
                <button className="p-[5px] bg-[#FF5A5A] text-white rounded-[30px]">
                  {" "}
                  +{" "}
                </button>
              </div>
              <p>${prod.productPrice * prod.count}</p>
              <img src={remove_icon} className="cartitems-remove-icon" alt="" />
            </div>
            <hr />
          </div>
        ))}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>$1000</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>$1000dan oshsa bepul oshmasa $50 boladi</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>$1000</h3>
              </div>
            </div>
            <button>PROCCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
