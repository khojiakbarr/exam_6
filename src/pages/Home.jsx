import { useSelector } from "react-redux";
import Card from "../components/Card";

const Home = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="ui grid container">
      {products.map((prod) => (
        <Card
          key={prod.id}
          id={prod.id}
          image={prod.productImg} 
          title={prod.productName}
          price={prod.productPrice}
          category={prod.productCategory}
        />
      ))}
    </div>
  );
};

export default Home;
