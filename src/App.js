import React from "react";
import { Routes, Route } from 'react-router-dom';
import AddBook from "./components/AddBook";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductView from "./components/ProductView";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/addproduct" element={<AddBook />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<ProductView />} />
      </Routes>
    </>
  );
};

export default App;
