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
import ManageCamps from "../Pages/DashBoard/ManageCamps/ManageCamps";
import UpdateCamp from "../Pages/DashBoard/UpdateCamp/UpdateCamp";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/paymentHistory";
import ParticipantInfo from "../Pages/DashBoard/ParticipantInfo/ParticipantInfo";
import ProfileManagement from "../Pages/DashBoard/ProfileManagement\"/ProfileManagement";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AdminRoute from "../Pages/PrivateRoute/AdminRoute";






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
                element:<AdminRoute><AddCamp></AddCamp></AdminRoute>
            },
            {
                path:'ProfileManagement',
                element:<PrivateRoute><ProfileManagement></ProfileManagement></PrivateRoute>
            },
            {
                path:'users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'contactUser',
                element:<AdminRoute><ContactUser></ContactUser></AdminRoute>
            },
            {
                path:'carts',
                element:<AdminRoute><JoinCampCart></JoinCampCart></AdminRoute>
            },
            {
                path:'manageCamps',
                element:<AdminRoute><ManageCamps></ManageCamps></AdminRoute>
            },
            {
                path:'updateCamp/:id',
                element:<UpdateCamp></UpdateCamp>,
                loader: ({params}) => fetch(`http://localhost:5008/camps/${params.id}`)
            },
            {
                path:'payment/:id',
                element:<Payment></Payment>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'participantInfo',
                element:<ParticipantInfo></ParticipantInfo>,
                loader:(()=>fetch('http://localhost:5008/registerInfo'))
            },
    ]
    }
])