import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/medical-camp-2990018-2484904.png'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
    const { user,logOut } = useContext(AuthContext)
    const [cart] =useCart()
    const links = <>
        <div className="gap-2 lg:flex text-white flex-row">
            <li className="text-xl"> <NavLink to='/' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 bg-black underline ' : ''}>Home</NavLink> </li>
            {
                user ? <li className="text-xl"> <NavLink to='/availableCamp' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 bg-black underline ' : ''}>Available Camps</NavLink> </li> : <li className="text-xl"> <Link to='/login' >Available Camps</Link> </li>
            }

           
                        <li className="text-xl"> <NavLink to='/contactUs' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 bg-black underline ' : ''}>Contact Us</NavLink> </li>

                        <li>
            <Link to="/dashboard/carts">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
        </div>


    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost font-bold normal-case text-s  "><div className=" flex items-center gap-2"><img className="w-[40px]" src={logo} alt="" /> <h1 className=" text-lg text-white">Medical Camp</h1></div> </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                        {links}
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost" onClick={logOut}>Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <div>
                                <Link to='/login'>
                                    <button className="btn btn-sm  btn-ghost">Login</button>
                                </Link>
                                <Link to='/register'>
                                    <button className="btn btn-sm  btn-ghost">Register</button>
                                </Link>
                            </div>


                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;