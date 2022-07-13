import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import PaymentFinPage from './pages/PaymentfinPage';
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
				<Route path="/payment" element={<PaymentPage />}></Route>
				<Route path="/shoppingcart" element={<ShoppingCartPage />}></Route>
				<Route path="/paymentfin" element={<PaymentFinPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
