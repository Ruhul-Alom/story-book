import React from 'react'
import Navbar from '../ui/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/shared/Footer'

const MainLayout = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <Navbar></Navbar>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout