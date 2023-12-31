import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import Login from './features/auth/components/Login'
import Signup from './features/auth/components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
