import { useSelector } from "react-redux";
import CardDetailInfo from "../components/CardDetailInfo";

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
          <CardDetailInfo key={prod.id} prod={prod} />
        ))}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
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
