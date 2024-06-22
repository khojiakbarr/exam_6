import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  let count = 0;
  const products = useSelector((state) => state.product.products);
  products.forEach((product) => {
    if (product.isSell) {
      count += 1;
    }
  });
  return (
    <div className="ui fixed menu">
      <div className="ui container flex justify-between ">
        <Link to={`/`}>
          <h2 id="ww">FakeShop</h2>
        </Link>
        <Link to={`/add`}>Add product</Link>
        <Link to={`cardDetail`}>
          <AiOutlineShoppingCart className="shopCard" />
          <div className="shopCardCount">
            <p>{count}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
