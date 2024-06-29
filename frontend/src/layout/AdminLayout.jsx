import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function AdminLayout() {
  return (
    <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer> 
    </>
  )
}

export default AdminLayout
