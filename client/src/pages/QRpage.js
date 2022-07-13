import ReactDOM, { BrowserRouter,Routes,Route,Navigate, useNavigate } from 'react-router-dom'
import React,{useState,useEffect}  from 'react';
import { QrReader } from 'react-qr-reader';
import MainPage from './MainPage';
import styled from 'styled-components';
import ResponsiveAppBar from '../components/appbar/RespnosiveAppBar';
import BottomNav from '../components/BottomNav'
import Typography from '@mui/material/Typography'
import './Font.css'

const QR = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  return (
    <>
    <ResponsiveAppBar/>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <BottomNav/>
      {/* <h4>&copy;DressUp, Inc. All copyrights reserved</h4> */}
   
      {/* <Route
      path='/MainPage'
      element={data.length < 1 ? <Navigate to='/'/>: <MainPage/> */}
    {/* }/>     */}
    </>
  );
}

export default QR