import React, { use } from 'react'
import { IoLogIn } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import './Navbar.css'
import { toast } from "react-toastify";

const Navbar = () => {
  const {user, logOut} = use(AuthContext)
const handleLogout = () => {
  logOut().then(() => {
  // Sign-out successful.
  toast.success('You logged out successfully!!')
}).catch((error) => {
  // An error happened.
  console.log(error)
});
}
  const links = 
  <>
    <li><NavLink className='hover:bg-base-300 rounded-md py-2 px-3 btn btn-ghost' to='/'>Home</NavLink></li>
    <li><NavLink className='hover:bg-base-300 rounded-md py-2 px-3 btn btn-ghost' to='/services'>Services</NavLink></li>
    <li><NavLink className='hover:bg-base-300 rounded-md py-2 px-3 btn btn-ghost' to='/profile'>My Profile</NavLink></li>
  </>
  return (
  <div className='shadow-sm sticky top-0 z-50 bg-pink-90/80 backdrop-blur-md shadow-sm'>
      <div className="navbar w-11/12 mx-auto flex justify-between items-center py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold navbar-small-device">
        {links}
      </ul>
    </div>
    <NavLink to="/" className="text-xl">
         {/* Logo + Subscribe */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-1">
            <span className="bg-orange-500 text-white px-3 py-1 rounded">P</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded">E</span>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded">T</span>
            <span className="text-gray-700 hidden md:block lg:block text-3xl mr-2">WarmPaws</span>
          </h2>
        </div>
    </NavLink>   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 navbar-container">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className='border-2 border-pink-500 text-pink-700 rounded-full px-4 py-1 flex items-center gap-2 hover:bg-pink-200 hover:font-bold'
>
  <IoLogIn className='h-5 w-5 md:h-7 md:w-7' />
  <span className='hidden md:inline lg:inline'>
    {
      user ?
      (
        <button onClick={handleLogout}>Logout</button>
      )
      :
      ( <Link to='/auth/login'>Login or Register</Link>)
    }
    
  </span>
</motion.button>


  </div>
</div>
  </div>
  )
}

export default Navbar