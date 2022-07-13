import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';
import QRpage from './pages/QRpage';
import axios from 'axios'; 


function App() {
  return (
    // <Routes />
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
			  <Route path="/QRpage" element={<QRpage />}></Route>
			  <Route path='/QRstock' element={<QRpage/>}></Route>
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
