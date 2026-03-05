import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router'


const Authentication = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-200 min-h-screen">
        <header className="shadow-sm sticky top-0 z-50 backdrop-blur-md shadow-sm">
        <Navbar></Navbar>
      </header>
      <main>
        {/* Authentication content will go here */}
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Authentication