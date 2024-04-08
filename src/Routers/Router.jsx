import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";

import Blog from "../Pages/Blog/Blog";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/blog",
        element: <Blog>Blog Page</Blog>,
      },
    ],
  },
]);

export default router;