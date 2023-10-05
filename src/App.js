import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import './app.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
