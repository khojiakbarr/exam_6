import { useDispatch, useSelector } from "react-redux";
import CardDetailInfo from "../components/CardDetailInfo";
import { useEffect } from "react";
import { calcPrice } from "../Store/Slices/ProductSlice";

const CardDetail = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isShipping = useSelector((state) => state.product.isShipping);
  const selProduct = products.filter((product) => product.isSell == true);
  useEffect(() => {
    dispatch(calcPrice());
  }, [products]);

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
          <CardDetailInfo key={prod.id} prod={prod} />
        ))}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                {isShipping >= 1000 ? <p>Shipping Fee</p> : <p>Shipping 50$</p>}
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>{isShipping !== NaN ? isShipping : 0}$</h3>
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
