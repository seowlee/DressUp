import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import StockList from "./StockList";
import RecommendationList from "./RecommendationList";
import ProductPhotoList from "./ProductPhotoList";
import ProductInfoText from "./ProductInfoText";
import ProductInfoButtons from "./ProductInfoButtons";
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
		CardHeader,
		Fab,
		ButtonGroup,
		} from '@mui/material';


const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
	</Box>
);

const ProductInfo = () => {
	return (
		<React.Fragment>
		<CssBaseline />
		{/* <Container fixed> */}
		<Grid 
			pl={15}
			pr={15}
			pt={15}
			container spacing={5}>
			<Grid item xs={6}>
				<Card 
					sx={{ pt:5, minHeight: 500 }}
					variant="outlined"
					justifyContent="center"
					style={{backgroundColor: "#F7F5F5"}}>
					<ProductPhotoList />
					{/* <img alt='test' src='img/logo_start.png' width={500} height={500}/> */}
				</Card>
			</Grid>
			<Grid item xs={6} >
				<Card 
					sx={{minHeight: 500 }} 
					variant="outlined"
					justifyContent="center"
					style={{backgroundColor: "#F7F5F5"}}>
				{/* <CardHeader 
					title={<Typography variant={'h4'}>{found.name}</Typography>} />
				<Divider variant="middle" /> */}
				<CardContent>
					<ProductInfoText />
				</CardContent>
				<Divider variant="middle" />
				<CardActions >
					<ProductInfoButtons />
				</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card 
					sx={{ minHeight: 200 }} 
					variant="outlined"
					justifyContent="center"
					style={{backgroundColor: "#F7F5F5"}}>
					<Typography pt={3} pl={3} pb={3} variant="h5" component="div" align='center'>
						재고
					</Typography>
					<div style={{ marginBottom: 15 }}>
						<StockList />
					</div>
				</Card>
			</Grid>
			<Grid item xs={12} >
				<Card 
					sx={{ minHeight: 320 }}
					variant="outlined"
					style={{backgroundColor: "#F7F5F5"}}>
				<Typography pt={3} pl={3} pb={3} variant="h5" component="div" align='center'>
					추천리스트
				</Typography>
				<div style={{ marginBottom: 15 }}>
					<RecommendationList />
				</div>
				</Card>
			</Grid>
		</Grid>

		{/* </Container> */}
			
		</React.Fragment>
	);
}

export default ProductInfo;