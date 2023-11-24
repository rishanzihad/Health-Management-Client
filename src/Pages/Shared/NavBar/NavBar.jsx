import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/6165897.jpg'

const NavBar = () => {
const user =false
    const links = <>
        <div className="gap-2 lg:flex  flex-row">
            <li className="text-xl"> <NavLink to='/' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 bg-black underline ' : ''}>Home</NavLink> </li>
            {
                user ? <li className="text-xl"> <NavLink to='/addblog' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ?  'text-green-400 bg-black underline ' : ''}>Add Blog</NavLink> </li> : <li className="text-xl"> <Link to='/login' >Add Blog</Link> </li>
            }
                        <li className="text-xl"> <NavLink to='/allblogs' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 bg-black underline ' : ''}>All Blogs</NavLink> </li> 
            {
                user ? <li className="text-xl"> <NavLink to='/wishlist' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 bg-black underline ' : ''}>wishlist</NavLink> </li> : <li className="text-xl"> <Link to='/login' >WishList</Link> </li>
            }
            <li className="text-xl"> <NavLink to='/featuredblogs' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-400 bg-black underline ' : ''}>Featured Blogs</NavLink> </li> 


        </div>


    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                   
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-s  "><img className="h-12 w-28" src={logo} alt="" /></Link>
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