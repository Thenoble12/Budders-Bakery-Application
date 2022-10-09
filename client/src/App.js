import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { UserProvider } from "./context/userDetails";
import SetUserDetails from "./routes/SetUserDetails";
import FetchUserDetails from "./routes/FetchUserDetails";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import './App.css';


// Route that goes to let us assign a user.
// When we click the button that assigns the user
// Go to user's start page.

const router = createBrowserRouter([
  { path: "/", element: <SetUserDetails /> },
  //{ path: "/user", element: <Home /> }//,
  { path: "/user", element: <FetchUserDetails /> },
  { path: "/user/menu", element: <Home /> },
  { path: "/user/cart", element: <Cart /> }
]);

function App() {
  return (
    <div className="container">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
