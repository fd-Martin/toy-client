import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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