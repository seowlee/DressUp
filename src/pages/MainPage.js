import React from 'react';
import styled from 'styled-components';
import ResponsiveAppBar from '../components/appbar/ResponsiveAppBar';
import ProductInfo from '../components/product/ProductInfo';

const MainPageDiv = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const MainPage = () => {
  return (
    <MainPageDiv>
      <ResponsiveAppBar />
      <br></br>
      <ProductInfo />
      <div >
        MainPage
        <br></br>
        <h1>DressUP!!</h1>
      </div>
    </MainPageDiv>
	
  )
}

export default MainPage;