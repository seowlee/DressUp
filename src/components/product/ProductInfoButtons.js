import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {
	Grid,
	Button,
	ButtonGroup,
	} from '@mui/material';

const ProductInfoButtons = () => {
  return (
	<Grid 
		pt={3}
		container justifyContent="center" 
		alignItems="center">
		<ButtonGroup>
			<Link to="/payment" style={{ textDecoration: 'none' }}>
				<Button 
					style={{
					backgroundColor: "#000000"
					}}
					sx={{mx:1}}
					variant="contained" 
					size="large"
				>구매하기</Button>
			</Link>
			<Button 
				onClick={() => {
					
				}}
				style={{
					backgroundColor: "#000000"
				}}
				sx={{mx:1}} variant="contained" size="large"
			>장바구니 담기</Button>
			<Button 
				style={{
					backgroundColor: "#000000"
				}}
				sx={{mx:1}} variant="contained" size="large">qr페이지로 이동</Button>
		</ButtonGroup>
	</Grid>
  )
}

export default ProductInfoButtons;