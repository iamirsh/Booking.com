import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Component/Navbar/Navbar';
import {Home} from './Pages/Home/Home';
import {Flights} from './Pages/Flights/Flights';
import { Login } from './Component/Login/Login';
import { SignUp } from './Component/Login/SignUp';
import {CheckoutPage} from './Component/Checkout/CheckoutPage';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stays' element={<Home />} />
        <Route path='/flights' element={<Flights />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
