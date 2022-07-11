import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import NumberProductButton from "./NumberProductButton";
import ColorSelectionButton from "./ColorSelectionButton";
import RecommendationList from "./RecommendationList";
import ProductPhotoList from "./ProductPhotoList";
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
		Paper,
		} from '@mui/material';


const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
	  •
	</Box>
);

const ProductInfo = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container fixed> */}
	  <Grid 
	  	pl={20}
		pr={20}
		pt={10}
		container spacing={5}>
		<Grid item xs={6}>
			<Card sx={{ pt:5, maxWidth: 500, minHeight: 500 }} justifyContent="center">
				<ProductPhotoList />
				{/* <img alt='test' src='img/logo_start.png' width={500} height={500}/> */}
			</Card>
		</Grid>
		<Grid item xs={6} >
			<Card sx={{ maxWidth: 500, minHeight: 500 }} justifyContent="center">
			<CardHeader 
				title={<Typography variant={'h4'}>옷이름</Typography>} />
			<Divider variant="middle" />
			<CardContent>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={3}>
						<Typography pb={3} variant="h5" component="div">
						가격
						</Typography>
					</Grid>
					<Grid item xs={9}>
						<Typography pb={3} variant="h5" component="div">
							1,000,000 원
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography pb={3} variant="h5" component="div">
						수량
						</Typography>
					</Grid>
					<Grid item xs={9}>
						<NumberProductButton />
					</Grid>
				</Grid>
				<Typography pb={3} variant="body2">
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<Divider variant="middle" />
			<CardActions sx={{ justifyContent: "center" }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Link to="/payment" style={{ textDecoration: 'none' }}>
							<Button 
								variant="contained" 
								size="large"
							>결제하기</Button>
						</Link>
					</Grid>
					<Grid item xs={6}>
						<Button variant="contained" size="large">장바구니</Button>
					</Grid>
				</Grid>
			</CardActions>
			</Card>
		</Grid>
		<Grid item xs={6}>
			<Card sx={{ minHeight: 200 }} justifyContent="center">
				<Typography pt={3} pl={3} variant="h5" component="div" align='left'>
					색상
				</Typography>
				<ColorSelectionButton />
			</Card>
		</Grid>
		<Grid item xs={12} >
			<Card sx={{ minHeight: 320 }}>
			<Typography pt={3} pl={3} pb={3} variant="h5" component="div" align='center'>
				추천리스트
			</Typography>
			<RecommendationList />
			</Card>
		</Grid>
	  </Grid>

      {/* </Container> */}
		
    </React.Fragment>
  );
}

export default ProductInfo;