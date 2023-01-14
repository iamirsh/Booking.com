import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import {List} from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';

const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<List />} />
        <Route path="/home/:id" element={<Hotel />} />
      </Routes>   
      </BrowserRouter>
    </div>
  )
}


export default App;
