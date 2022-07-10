import React from 'react';
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
		CardHeader
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
	  	pl={5}
		container spacing={5}>
		<Grid item xs={6} >
			<Box 
				display="flex"
				justifyContent="center"
				sx={{ bgcolor: '#FFFFFF' }} >
				<img alt='test' src='img/logo_start.png' width={500} height={500}/>
			</Box>
		</Grid>
		<Grid item xs={6} >
			<Card sx={{ maxWidth: 500, minHeight: 500 }} justifyContent="center">
			<CardContent>
				<Typography pb={3} variant="h5" component="div">
				수량
				</Typography>
				<Typography pb={3} variant="h5" component="div">
				가격
				</Typography>
				<Typography pb={3} variant="body2">
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions >
				<Box>
					<Button variant="contained" size="big">구매</Button>
				</Box>
			</CardActions>
			</Card>
		</Grid>
	  </Grid>
      {/* </Container> */}
		
    </React.Fragment>
  );
}

export default ProductInfo;