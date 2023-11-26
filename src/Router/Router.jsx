import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



import AddCamp from "../Pages/DashBoard/AddCamp/AddCamp";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUser";
import ContactUs from "../ContactUs/ContactUs";
import MainLayOut from "../Pages/MainLayOut/MainLayOut";
import Dashboard from "../Pages/MainLayOut/DashBoard/DashBoard";
import ContactUser from "../Pages/DashBoard/ContactUSer/ContactUser";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import JoinCampCart from "../Pages/DashBoard/JoinCampCart/JoinCampCart";





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
                path: '/contactUs',
                element:<ContactUs></ContactUs>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/availableCamp',
                element:<AvailableCamp></AvailableCamp>
            },
            {
                path: '/details/:id',
                element: <DetailsPage></DetailsPage>,
               

            },
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'addCamp',
                element:<AddCamp></AddCamp>
            },
            {
                path:'users',
                element:<AllUsers></AllUsers>
            },
            {
                path:'contactUser',
                element:<ContactUser></ContactUser>
            },
            {
                path:'carts',
                element:<JoinCampCart></JoinCampCart>
            },
    ]
    }
])