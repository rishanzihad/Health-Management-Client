import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdAddCircleOutline, } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import {  useContext, useState } from "react";

import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import { Toaster } from "react-hot-toast";
import useHealthProfes from "../../Hooks/useHealthProfes";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useUSer from "../../Hooks/useUSer";


const DropdownMenu = ({ isAdmin,isUser,isHealthcareProfessionals,  isMenuOpen, closeMenu }) => {


  const [cart] = useCart();


  return (
    
    <ul className={`menu p-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
      {
       isHealthcareProfessionals &&<>
        <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome> HealthcareProfessionals Home
            </NavLink>
          </li>
       </>
         
      }
      {isAdmin ===true &&(
        <>
          <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addCamp">
              <IoMdAddCircleOutline /> Add Camp
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageCamps">
              <FaList></FaList> Manage Camps
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contactUser">
              <FaBook></FaBook> Contact User
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/participantInfo">
              <FaBook></FaBook> Participant Info
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/dashboard/users">
              <FaUser></FaUser> All Users
            </NavLink>
          </li>
        </>
       )}
      {
       isUser && (
          <>
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/ProfileManagement">
                <FaCalendar></FaCalendar>Profile Management
              </NavLink>
            </li>
            
           
          <li>
              <NavLink to="/dashboard/carts">
                <FaShoppingCart></FaShoppingCart>
                Register Camp ({cart.length})</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
                <FaAd></FaAd> Add a Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistory">
                <FaList></FaList>Payment History
              </NavLink>
            </li>
          </>
        )}

    
      
      <div className="divider"></div>
      <li>
        <NavLink to="/">
          <FaHome></FaHome> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">
          <FaSearch></FaSearch> Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/contact">
          <FaEnvelope></FaEnvelope> Contact
        </NavLink>
      </li>
    </ul>
  );
};

const Dashboard = () => {

   const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isUser] = useUSer();

const [isHealthcareProfessionals]=useHealthProfes()
  //const isAdmin = true
  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
   <div className="md:flex max-w-[1200px] mx-auto">
    {/* dashboard side bar */}
    <div className="md:w-64 md:min-h-screen text-white bg-green-400">
      <div className="menu-toggle flex justify-center items-center md:hidden" onClick={handleToggleMenu}>
        <button className="flex items-center text-2xl font-bold">
          <IoMenu className="mr-2" /> Menu
        </button>
      </div>
      <DropdownMenu isUser={isUser} isHealthcareProfessionals={isHealthcareProfessionals} isAdmin={isAdmin} isMenuOpen={isMenuOpen} closeMenu={handleCloseMenu} />
    </div>

    <div className="flex-1 md:w-full p-8">
      <Outlet />
      <Toaster/>
    </div>
  </div>
   
  );
};

export default Dashboard;