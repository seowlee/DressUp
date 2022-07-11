import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import About from './pages/PaymentPage';
// import Routes from "./routes/Routes";

function App() {
  return (
    // <Routes />
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
			  <Route path="/payment" element={<PaymentPage />}></Route>
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
