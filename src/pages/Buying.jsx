import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/product-card";
import "../components/product-card.css";
import { getProductApi } from "../helper/fetchApi";

const Buying = () => {
  const [products, setProducts] = useState([]);
  const { messageApi } = useOutletContext();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProductApi();
        setProducts(data.docs);
        console.log(data.docs);
      } catch (error) {
        messageApi.open({
          type: "error",
          content: "Error fetching and parsing data: " + error.message,
        });
      }
    };
    load();
  }, []);

  return (
    <div className='buying-page'>
      <div className='title'>
        <h1>Limited Edition Luxury Car</h1>
      </div>
      <div className='cards'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            img={product.imageSrc}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Buying;
