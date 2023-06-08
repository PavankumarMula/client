import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const res = await fetch("http://localhost:4000/products");
    const resJson = await res.json();
    setProduct(resJson);
  };
  return (
    <>
      <div style={{ display: "flex", columnGap: "30px" }}>
        {products !== undefined &&
          products.map((item) => (
            <div>
              
              <ProductCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                id={item.id}
              />
           
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
