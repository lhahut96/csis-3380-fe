import ProductCard from "../components/product-card";
import { useState, useEffect } from "react";
import { getProductsApi } from "../helper/fetchApi";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../components/product-card.css";

const buying = () => {
  const [products, setProducts] = useState([]);
  const { messageApi } = useOutletContext();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const data = await getProductsApi();
      setProducts(data.docs);
      console.log(data.docs);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Error fetching and parsing data: " + error.message,
      });
    }
  };


  return (
    <div className="buying-page">
      <div className="title">
        <h1>Limited Edition Luxury Car</h1>
      </div>
      <div className="cards">
        {products.map((product) => (
          <ProductCard
            name={product.title}
            img={product.imageSrc}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default buying;
