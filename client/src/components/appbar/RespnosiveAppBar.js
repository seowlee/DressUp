import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const AppBarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;

const ResponsiveAppBar = () => {
  return (
    <div className="App">
      <AppBar position="fixed" style={{backgroundColor: "white"}}>
        <Toolbar>
          <IconButton aria-label="app" color="inherit">
            <AppBarDiv>
  				    <img alt='logo' src='img/logo_new_text.png' width={200} height={100}/>
            </AppBarDiv>
				    {/* <img alt='logo_text' src='img/logo_text.png' width={60} height={40}/> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

  
export default ResponsiveAppBar;
