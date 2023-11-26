import { Outlet, useLocation } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import NavBar from "../Shared/NavBar/NavBar";




const MainLayOut = () => {
    const location =useLocation()
    const noHeaderFooter =location.pathname.includes('login')||location.pathname.includes('register')
    return (
        <div className="max-w-[1200px] mx-auto">
            {noHeaderFooter ||   <NavBar></NavBar>}
     
           <Outlet></Outlet>
          
         
            <Toaster/>
        </div>
    );
};

export default MainLayOut;