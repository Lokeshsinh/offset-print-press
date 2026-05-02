import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Navbar from './componets/Navbar/Navbar'
import Contact from './componets/Contact/Contact'  // ← add this

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App