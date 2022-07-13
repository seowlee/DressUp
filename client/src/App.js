import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';
<<<<<<< HEAD:client/src/App.js
import PaymentPage from './pages/PaymentPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { Button } from 'antd';
import './App.css';
// import Routes from "./routes/Routes";
=======
import QRpage from './pages/QRpage';
import axios from 'axios'; 

>>>>>>> origin/test:src/App.js

function App() {
  return (
    // <Routes />
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
<<<<<<< HEAD:client/src/App.js
			  <Route path="/payment" element={<PaymentPage />}></Route>
			  <Route path="/shoppingcart" element={<ShoppingCartPage />}></Route>
=======
			  <Route path="/QRpage" element={<QRpage />}></Route>
			  <Route path='/QRstock' element={<QRpage/>}></Route>
>>>>>>> origin/test:src/App.js
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
