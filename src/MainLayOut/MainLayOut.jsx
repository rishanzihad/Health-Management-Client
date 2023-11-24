import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";



const MainLayOut = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
         <Home></Home>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;