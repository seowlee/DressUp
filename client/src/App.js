import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';

import QRpage from './pages/QRpage';
import axios from 'axios'; 


import PaymentPage from './pages/PaymentPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { Button } from 'antd';
import './App.css';
// import Routes from "./routes/Routes";


function App() {
  return (
    // <Routes />
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
			  <Route path="/QRpage" element={<QRpage />}></Route>
			  <Route path='/QRstock' element={<QRpage/>}></Route>

			  <Route path="/payment" element={<PaymentPage />}></Route>
			  <Route path="/shoppingcart" element={<ShoppingCartPage />}></Route>

		  </Routes>
	</BrowserRouter>
  );
}

export default App;