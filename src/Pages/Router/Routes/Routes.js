import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Singup from "../../Singup/Singup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <Singup></Singup>
      },
    ]
  }
])

export default router;


