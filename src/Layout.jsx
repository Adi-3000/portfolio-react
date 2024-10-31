import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/Footer/Footer'
import Btmnavbar from './components/btmnav/Btmnavbar'


function Layout() {
  const mql = window.matchMedia('(max-width: 600px)');
  let mobileView = mql.matches;

  return (
   <>
   <div style={mobileView?{display:"none"}:{display:"block"}}>
   <Navbar  />
   </div>
   <Outlet style={{height:"100dvh"}}/>
   <div style={mobileView?{display:"block"}:{display:"none"}}>

   <Btmnavbar />
   </div>

   </>
  )
}

export default Layout