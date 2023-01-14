import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import {List} from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
import { Login } from './Component/Login/Login';
import {Navbar} from './Component/Navbar/Navbar';
import {SignUp} from './Component/Login/SignUp';


const App = () => {
  return (
    <div id="main">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<List />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>   
      </BrowserRouter>
    </div>
  )
}


export default App;
