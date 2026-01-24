import React from 'react'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'

const App = () => {
  return <>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Landing/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/explore' element={<Explore/>}></Route>
  </Routes>
  <Footer/>
  </>
}

export default App
