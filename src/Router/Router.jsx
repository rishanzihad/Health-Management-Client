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
                element:<PrivateRoute><AvailableCamp></AvailableCamp></PrivateRoute>
            },
            {
                path: '/details/:id',
                element:<PrivateRoute> <DetailsPage></DetailsPage></PrivateRoute>,
               

            },
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'userHome',
          
            },
            {
                path:'payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path:'paymentHistory',
                element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
            {
                path:'carts',
                element:<PrivateRoute><JoinCampCart></JoinCampCart></PrivateRoute>
            },
            {
                path:'ProfileManagement',
                element:<PrivateRoute><ProfileManagement></ProfileManagement></PrivateRoute>
            },
            {
                path:'addCamp',
                element:<AdminRoute><AddCamp></AddCamp></AdminRoute>
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
                path:'manageCamps',
                element:<AdminRoute><ManageCamps></ManageCamps></AdminRoute>
            },
            {
                path:'updateCamp/:id',
                element:<AdminRoute><UpdateCamp></UpdateCamp></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5008/camps/${params.id}`)
            },
           
            {
                path:'participantInfo',
                element:<AdminRoute><ParticipantInfo></ParticipantInfo></AdminRoute>,
                loader:(()=>fetch('http://localhost:5008/registerInfo'))
            },
    ]
    }
])