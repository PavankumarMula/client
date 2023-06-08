import React from "react";
import NavBar from "./components/NavBar";
import { Route,Routes} from "react-router";
import products from "./components/products";
import addproduct from "./components/addproduct";
import HomeShop from "./components/HomeShop";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/"exact Component={HomeShop}></Route>
        <Route path="/add-product" Component={addproduct}/>
        <Route path="/products" Component={products}/>
      </Routes>
    </>
  );
};

export default App;
