import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Products from './components/products/Products';
import AboutUs from './components/AboutUs';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import './app.scss';
import initFontAwesome from './fontAwesome';
import Payment from './components/payment/Payment';
import Cart from './components/cart/Carts';
import Account from './components/Account';
import ProductDetails from './components/products/ProductDetails'
import { CartProvider } from './components/cart/CartContext';

initFontAwesome();

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productId' element={<ProductDetails />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-account' element={<Account />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
