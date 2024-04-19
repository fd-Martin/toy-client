import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateAuthProvider from "../Pages/PrivateAuthProvider/PrivateAuthProvider";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import SingleToy from "../Pages/SingleToy/SingleToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";



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
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch(`http://localhost:3000/allToys`)
      },
      {
        path: "/alltoys/:_id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) => fetch(`http://localhost:3000/allToys/${params._id}`)
      },
      {
        path: "/myToys",
        element: <PrivateAuthProvider><MyToys></MyToys></PrivateAuthProvider>
      },
      {
        path: '/updateToy/:_id',
        element: <PrivateAuthProvider><UpdateToy /> </PrivateAuthProvider>,
        loader: ({ params }) => fetch(`http://localhost:3000/allToys/${params._id}`)

      },
      {
        path: "/addAtoy",
        element: <PrivateAuthProvider><AddAToy></AddAToy></PrivateAuthProvider>
      },

    ],
  },
]);

export default router;