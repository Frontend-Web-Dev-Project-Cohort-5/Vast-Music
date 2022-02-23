// import logo from './logo.svg'
import React from 'react'
import './App.css'
import NavBar from './Conponents/NavBar'
import { Routes, Route } from 'react-router-dom'
// import Card from './Components/Card'
import Footer from './Conponents/Footer'
import Home from './Pages/Home'
import AboutUs from './Pages/About Us'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import NoPage from './Pages/NoPage'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
