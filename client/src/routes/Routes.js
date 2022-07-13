import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from '../pages/LogoPage';
import MainPage from '../pages/MainPage';
const Routes = () => {
  return (
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
		  </Routes>
	</BrowserRouter>
  )
}

export default Routes;