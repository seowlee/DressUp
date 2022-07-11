import React from "react";
// import styled from 'styled-components';
import { Button,
		 ButtonGroup,
		 Grid
		} 
		 from '@mui/material';
import { color } from "@mui/system";

// const ColorSelectionButtonDiv = styled.div`
//   align-items: left;
//   justify-content: left;
//   height: 100vh;
// `
const ColorSelectionButton = () => {
  return (
	<Grid 
		pt={2}
		pl={3}
		pr={5}
		container spacing={5}>
		<Grid item xs={6} >
			<ButtonGroup size="large" aria-label="large button group">
				<Button style = {{backgroundColor:'red', color:'red'}}>one</Button>
				<Button style = {{backgroundColor:'yellow', color:"yellow"}}>two</Button>
				<Button style = {{backgroundColor:'blue', color:"blue"}}>three</Button>
			</ButtonGroup>
		</Grid>
	</Grid>
  )
}

export default ColorSelectionButton;