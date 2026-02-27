import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <CustomCursor />
      <Navbar />
      <Outlet />
      <Footer />
      </div>
  )
}

export default App