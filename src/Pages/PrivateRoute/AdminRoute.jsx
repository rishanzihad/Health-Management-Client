import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext); 
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress flex justify-center w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;