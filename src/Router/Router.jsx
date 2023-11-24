import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {

                path: "/",
                element: <Home></Home>,

            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    }
])