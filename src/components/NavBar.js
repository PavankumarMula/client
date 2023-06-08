import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "whitesmoke",
          height: "48px",
          listStyle: "none",
          gap: "40px",
          textDecoration: "none",
        }}
      >
        <li
          style={{
            color: "black",
            textDecoration: "none",
            marginTop: "10px",
            fontFamily: "verdana",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Shop
          </NavLink>
        </li>
        <li
          style={{
            color: "black",
            textDecoration: "none",
            marginTop: "10px",
            fontFamily: "verdana",
          }}
        >
          <NavLink to="/products" style={{ textDecoration: "none" }}>
            products
          </NavLink>
        </li>
        <li
          style={{
            color: "black",
            textDecoration: "none",
            marginTop: "10px",
            fontFamily: "verdana",
          }}
        >
          <NavLink to="/add-product" style={{ textDecoration: "none" }}>
            add-product
          </NavLink>
        </li>
        <li
          style={{
            color: "black",
            textDecoration: "none",
            marginTop: "10px",
            fontFamily: "verdana",
          }}
        >
          <NavLink to="/cart" style={{ textDecoration: "none" }}>
            Cart
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
