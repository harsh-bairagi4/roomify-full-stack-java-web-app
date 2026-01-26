import React from 'react'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Facility from './pages/Facility'
import Dashboard from './pages/Dashboard'

const App = () => {
  return <>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Landing/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/explore' element={<Explore/>}></Route>
  <Route path='/facility/:type/:id' element={<Facility/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  </Routes>
  <Footer/>
  </>
}

export default App
