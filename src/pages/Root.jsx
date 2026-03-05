import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer/Footer'

const Root = () => {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root