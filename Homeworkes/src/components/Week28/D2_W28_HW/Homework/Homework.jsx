import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import Header from './Component/Header'
import RoutesBody from './Component/RoutesBody'
import Footer from './Component/Footer'

import Profile from './Pages/Profile'
import Project from './Pages/Project'
import About from './Pages/About'



export default function Homework() {
  const allChildrens = [
    { path: '/HW8/profile', element: <Profile />},
    { path: '/HW8/project', element: <Project />},
    { path: '/HW8/about', element: <About />},
  ];

  return (
    <div>
      <Header />
      <RoutesBody routes={allChildrens} />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
