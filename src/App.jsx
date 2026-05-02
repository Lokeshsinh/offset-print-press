import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './componets/Home/Home'
import HomePage from './pages/HomePage'
import Navbar from './componets/Navbar/Navbar'
import Footer from './componets/Footer/Footer'
import About from './pages/About'
import Service from './pages/Service'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
