import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../components/about/About";
import Properties from "../components/properties/Properties";
import Contact from "../components/contact/Contact";
import PrivateRoute from "../components/protectedRoute/PrivateRoute";
import EstateDetails from "../components/estateDetails/EstateDetails";
import NotFound from "../components/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
    ],
  },
]);

export default router;
