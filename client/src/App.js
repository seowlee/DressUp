import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';
<<<<<<< HEAD
<<<<<<< HEAD:client/src/App.js
=======

import QRpage from './pages/QRpage';
import axios from 'axios'; 


>>>>>>> 31aaafdfec7e24a21bc121648027d8eb76a16ad4
import PaymentPage from './pages/PaymentPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { Button } from 'antd';
import './App.css';
// import Routes from "./routes/Routes";
<<<<<<< HEAD
=======
import QRpage from './pages/QRpage';
import axios from 'axios'; 

>>>>>>> origin/test:src/App.js
=======

>>>>>>> 31aaafdfec7e24a21bc121648027d8eb76a16ad4

function App() {
  return (
    // <Routes />
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
<<<<<<< HEAD
<<<<<<< HEAD:client/src/App.js
			  <Route path="/payment" element={<PaymentPage />}></Route>
			  <Route path="/shoppingcart" element={<ShoppingCartPage />}></Route>
=======
			  <Route path="/QRpage" element={<QRpage />}></Route>
			  <Route path='/QRstock' element={<QRpage/>}></Route>
>>>>>>> origin/test:src/App.js
=======
			  <Route path="/QRpage" element={<QRpage />}></Route>
			  <Route path='/QRstock' element={<QRpage/>}></Route>

			  <Route path="/payment" element={<PaymentPage />}></Route>
			  <Route path="/shoppingcart" element={<ShoppingCartPage />}></Route>

>>>>>>> 31aaafdfec7e24a21bc121648027d8eb76a16ad4
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
