import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(`http://localhost:4000/getbooks`);
    const data = await res.data;
    setProducts(data);
  };

  return (
    <>
      <div style={{ display: "flex",columnGap:'10px',rowGap:'5px',marginTop:'20px' }}>
        {products.map((product) => {
          return (
            <ProductCard
              title={product.title}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
