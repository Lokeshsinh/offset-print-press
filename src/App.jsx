import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './componets/Home/Home'
import HomePage from './pages/HomePage'
import Navbar from './componets/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
