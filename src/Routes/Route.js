import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Contact from "../Pages/ContactUs/Contact";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
   
       {
        path: "/",
        element: <Home></Home>,
       },
       {
        path: "/contact",
        element: <Contact></Contact>,
       }

    ],
    }
]);

export default router;
