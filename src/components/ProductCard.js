import React from "react";
import "./ProductCard.css";
import productImage from "../assets/item.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, price, id }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-card" onClick={clickHandler}>
      <img
        src={productImage}
        alt="pic"
        style={{ width: "100%", height: "150px" }}
      />
      <p>Title: {title}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default ProductCard;
