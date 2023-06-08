import React from "react";
import "./addproduct.css";

const addproduct = () => {
  return (
    <>
      <form action="/submit-product" method="POST" className="product-form">
        <label htmlFor="name">Name Of the Product</label>
        <input id="name" type="text" name="title"></input>
        <label htmlFor="description">description</label>
        <input id="description" type="text" name="desc"></input>
        <label htmlFor="price">price</label>
        <input id="price" type="number" name="price"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default addproduct;
