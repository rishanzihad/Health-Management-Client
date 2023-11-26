import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdAddCircleOutline, } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const DropdownMenu = ({ isAdmin, isMenuOpen, closeMenu }) => {
  return (
    <ul className={`menu p-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
      {isAdmin ? (
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
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBook></FaBook> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUser></FaUser> All Users
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaCalendar></FaCalendar> not Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaList></FaList> Real Payment History
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
  const cart = true;
  const isAdmin = true;

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
      <DropdownMenu isAdmin={isAdmin} isMenuOpen={isMenuOpen} closeMenu={handleCloseMenu} />
    </div>

    <div className="flex-1 md:w-full p-8">
      <Outlet />
    </div>
  </div>
  );
};

export default Dashboard;
