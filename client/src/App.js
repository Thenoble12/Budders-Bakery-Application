import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { UserProvider } from "./context/userDetails";
import SetUserDetails from "./routes/SetUserDetails";
import FetchUserDetails from "./routes/FetchUserDetails";

// Route that goes to let us assign a user.
// When we click the button that assigns the user
// Go to user's start page.

const router = createBrowserRouter([
  {
    path: "/",
    element: <SetUserDetails />,
  },
  { path: "/user", element: <FetchUserDetails /> },
  { path: "/user/menu", element: <Home/> }
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
