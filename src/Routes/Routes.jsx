import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/About";
import Work from "../Pages/Work/Work";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Services from "../Pages/Services/Services";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <>page not found</>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/work",
        element: <Work></Work>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
    ],
  },
]);

export default router;
