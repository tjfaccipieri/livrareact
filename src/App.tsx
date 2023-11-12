import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App