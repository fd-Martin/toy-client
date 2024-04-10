import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";

import Blog from "../Pages/Blog/Blog";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog>Blog Page</Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>
      }
    ],
  },
]);

export default router;