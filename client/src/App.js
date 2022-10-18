import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { UserProvider } from "./context/userDetails";
import SetUserDetails from "./routes/SetUserDetails";
import FetchUserDetails from "./routes/FetchUserDetails";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Products/Product";

// Route that goes to let us assign a user.
// When we click the button that assigns the user
// Go to user's start page.

function App() {
  const [activeSession, setActiveSession] = useState(null);

  // const user = useSelector();

  const router = createBrowserRouter([
    { path: "/", element: <SetUserDetails /> },
    //{ path: "/user", element: <Home /> }//,
    { path: "/user", element: <FetchUserDetails /> },
    { path: "/menu", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/product", element: <Product /> },
    { path: "/signup", element: <Register /> },
    {
      path: "/login",
      element: (
        <Login
          activeAccount={activeSession}
          setActiveAccount={setActiveSession}
        />
      ),
    },
  ]);

  return (
    <div className="container">
      <UserProvider>        
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
