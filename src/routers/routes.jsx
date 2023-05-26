import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/homepage/Home";
import Main from "../main_layout/Main";
import Blog from "../components/pages/blogpage/Blog";
import ChefRecipes from "../components/shared_pages/chefRecipes/ChefRecipes";
import Login from "../components/pages/login_register_pages/Login";
import Register from "../components/pages/login_register_pages/Register";
import ErrorPage from "../components/pages/errorPage/ErrorPage";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://top-chefs-server-mdmahafuzur47.vercel.app/chefInfo')
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
  },
  {
    path: '/chefRecipes/:id',
    element: <PrivetRoutes><ChefRecipes /></PrivetRoutes>,
    errorElement: <ErrorPage />,
    loader: ({params}) => fetch(`https://top-chefs-server-mdmahafuzur47.vercel.app/chefInfo/${params.id}`)
  }
]);

export default router;
