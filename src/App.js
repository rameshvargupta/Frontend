import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import Login from './features/auth/components/Login'
import Signup from './features/auth/components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
