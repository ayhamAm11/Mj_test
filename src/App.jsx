import React from "react";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import Product from "./page/Product";
import Account from "./page/Account/Account";
import Main from "./component/Main";
import Orders from "./page/Orders";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white text-black">
      
        <Routes>
          <Route path="" element={<Main/>} >
             <Route path="/" element={<Home/> }/>
            <Route path="/product" element={<Product />} />
            <Route path="/orders" element={<Orders/>}  />
          </Route>
          <Route path="/account" element={<Account />}  />
          
        </Routes>
        
    </div>
  );
};

export default App;
