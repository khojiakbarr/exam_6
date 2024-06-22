import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addSell } from "../Store/Slices/ProductSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.find((product) => product.id == id); // Replace with the
  const dispatch = useDispatch();

  return (
    <>
      <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={product.productImg}
                  alt="product"
                />
              </div>
              <div className="column rp">
                <h1>{product.productName}</h1>
                <h2>
                  <h3 className="ui teal tag label">${product.productPrice}</h3>
                </h2>
                <h3 className="ui brown block header">
                  {product.productCategory}
                </h3>
                <p>{product.productDescription}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <button
                    onClick={() => dispatch(addSell({ id: id }))}
                    className="content"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
