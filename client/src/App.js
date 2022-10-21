import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar2 from "./components/Navbar/Navbar2"

import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Products/Product";
import Footer from "./components/common/Footer/Footer";
import Account from "./pages/Account/Account";


// Route that goes to let us assign a user.
// When we click the button that assigns the user
// Go to user's start page.

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);  

  return (   
    <>
      <Router> 
        <Navbar2 user={user} onLogout={setUser}/>
        {/* <Navbar user={user} onLogout={setUser}/> */}
        <div className="container">      
          <Routes>
            <Route path="/" element={<Home setProduct={setData} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product itemData={data} />} />
            <Route path="/signup" element={<Register />} />  
            <Route path="/login" element={<Login onLogin={setUser} />} />    
            <Route path="/account" element={<Account userAccount={user} onLogout={setUser}/>} />                         
          </Routes>      
        </div>
        <Footer />
      </Router>  
    </>
  );
}

export default App;
