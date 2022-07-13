import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ShoppingCartList from '../components/cart/ShoppingCartList';
import ResponsiveAppBar from '../components/appbar/ResponsiveAppBar';
import {CssBaseline,
	Box,
	Container,
	Grid,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Divider,
	Fab,
	ButtonGroup,
	} from '@mui/material';

const ShoppingCartPage = () => {
  return (
	<React.Fragment>
		<CssBaseline />
		<ResponsiveAppBar />
		<Grid 
			pl={15}
			pr={15}
			pt={15}
			mb={15}
			container spacing={5}>
			<Grid pd={3} item xs={12}>
				<Card 
					sx={{ minHeight: 500 }}
					variant="outlined"
					justifyContent="center"
					style={{backgroundColor: "#F7F5F5",
							}}>
					<Typography pt={3} pl={3} pb={3} variant="h5" component="div" align='center'>
						장바구니목록
					</Typography>
					<Divider variant="middle" />
					<ShoppingCartList />
					<CardActions >
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
									>결제하기</Button>
								</Link>
								{/* <Button sx={{mx:1}} variant="contained" size="large">뒤로가기</Button> */}
								<Button 
									style={{
										backgroundColor: "#000000"
									}}
									sx={{mx:1}} variant="contained" size="large">qr페이지로 이동</Button>
							</ButtonGroup>
						</Grid>
					</CardActions>				
				</Card>
			</Grid>
		</Grid>
	</React.Fragment>
  );
};

export default ShoppingCartPage