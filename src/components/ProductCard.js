import React from "react";
import productImage from "../assets/item.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ id,title, description, price }) => {
  return (
    <>
      <div
        style={{
          height: "300px",
          width: "200px",
          border: "2px solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          flexDirection: "column",
          marginTop:'20px',
          fontFamily:'verdana'
        }}
      >
        <img
          src={productImage}
          alt="product"
          style={{ width: "100%", height: "80%", objectFit: "cover" }}
        ></img>
        {title}
        <br />
        {description}
        <br />
        {price}
        <br />
        <Link
        to={`/products/${id}`}
        style={{
          backgroundColor: "#f5f5f5",
          color: "black",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >Details</Link>
      </div>
    </>
  );
};

export default ProductCard;
