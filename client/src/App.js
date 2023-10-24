import React, {useState} from 'react';
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
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './components/context/AuthContext';
import CreateProduct from './components/admin/CreateProduct';
// import AdminRouteGuard from './components/RouteGuard';
import AdminLayout from './components/admin/AdminLayout.js';

initFontAwesome();

function App() {
//   const [token, setToken] = useState(null);
//   // const isAdmin = true
//   function setTokenInApp(token) {
//     setToken(token);
// }


  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ProductDetails />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/my-account' element={<Account />} />
            <Route path='/admin/add-product' element={<CreateProduct />} />
            <Route path='/admin' element={<AdminLayout />} />
            {/* <Route path='/admin' element={<AdminRouteGuard><AdminLayout /></AdminRouteGuard>} /> */}


        
          </Routes>
          {/* Render the Footer only if isAdmin is false */}
          {/* {!isAdmin && <Footer />} */}

           {/* <Route path="/admin" element={<RouteGuard isAdmin={isAdmin} />}>
              <Route index element={<AdminDashboard />} />
            </Route> */}
            {/* <Route path='/admin/*' element={ */}
            {/* <AdminLayout> */}
              {/* <Route path='add-product' element={<CreateProduct />} /> */}
              {/* Add more admin-related routes here */}
            {/* </AdminLayout> */}
          {/* } */}
        {/* /> */}
        
        
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
