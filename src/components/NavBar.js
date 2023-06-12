import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <ul className="list">
          <li>
            <Link to="/home"  className="list-item">Home</Link>
          </li>
          <li >
            <Link to="/addproduct"  className="list-item">Add Product</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
