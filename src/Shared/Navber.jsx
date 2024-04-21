import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import recipe from '../Shared/recipe.png'
import { FaRegUserCircle } from "react-icons/fa"
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="md:navbar-start">

                    <div className='grid grid-cols-3 items-center justify-center' >

                        <div>
                            <div className="dropdown md:hidden text-2xl">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 px-1 font-bold">
                                    <li>
                                        {user ?
                                            <div>
                                                <span className="tooltip tooltip-bottom  flex items-center justify-center w-16 h-16 ">
                                                    {user.photoURL ? <img src={user.photoURL} className='  w-16 h-16 object-fill' /> : <FaRegUserCircle className='text-6xl' />}
                                                </span>
                                                <span>
                                                    <h5>Name:{user.displayName ? user.displayName : "Untitled"}</h5>
                                                </span>
                                            </div> : null}
                                    </li>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/allToys'>All Toys</Link></li>
                                    {
                                        user ?
                                            <>
                                                <li><Link to='/myToys'>My Toys</Link></li>
                                                <li><Link to='/addAtoy'>Add A Toy</Link></li>
                                            </> : ''

                                    }
                                    {
                                        user ? <button className="btn btn-warning text-xl w-full " onClick={handleLogOut}>LogOut</button> :
                                            <div>
                                                <Link to='/login'>
                                                    <button className="btn btn-primary text-xl  w-full">Login</button>
                                                </Link>
                                            </div>
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <Link to='/'> <img className=' min-w-28   ' src={recipe} /></Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-sm font-bold">
                        <li><NavLink to='/' className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""}>Home</NavLink></li>
                        <li><NavLink to='blog' className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""}>Blog</NavLink>
                        </li>
                        <li><NavLink to='allToys' className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""}>All Toys</NavLink>
                        </li>
                        {
                            user ?
                                <>
                                    <li><NavLink to='/myToys' className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""}>My Toys</NavLink>
                                    </li>
                                    <li><NavLink to='/addAtoy' className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""}>Add A Toy</NavLink>
                                    </li>
                                </> : ''

                        }

                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    <div className='flex items-center'> {user ?
                        <div className="avatar">
                            <span className="w-16 tooltip  tooltip-bottom rounded-full" data-tip={user.displayName ? user.displayName : "Untitled"}>
                                {user.photoURL ? <img src={user.photoURL} className='  w-16 h-16 object-fill' /> : <FaRegUserCircle className='text-4xl' />}
                            </span>
                        </div>
                        : null}
                        {
                            user ? <button className="btn btn-warning text-xl ms-5" onClick={handleLogOut}>LogOut</button> :
                                <div>
                                    <Link to='/login'>
                                        <button className="btn btn-primary text-xl">Login</button>
                                    </Link>
                                    <Link to='/signup'>
                                        <button className="btn btn-primary text-xl">Sign Up</button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
