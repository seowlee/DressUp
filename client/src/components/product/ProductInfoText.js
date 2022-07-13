import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import NumberProductButton from "./NumberProductButton";
import {
	Grid,
	Typography,
	Divider,
	} from '@mui/material';

const ProductInfoText = () => {
	const arr = [
		{id: 1, name: '옥스퍼드 패널 원피스', price: '1,000,000원', count: '1', color: '라이트 로즈', size: 'xs'},
		{id: 2, name: '옥스퍼드 패널 원피스', price: '1,000,000원', count: '1', color: '라이트 블루', size: 'xs'},
		{id: 3, name: 'aaa', price: '1,000원', count: '2', color: '블랙', size: 's'},
		{id: 4, name: 'bbb', price: '50,000원', count: '3', color: '단색', size: 'L'},
	];
	
	const product = arr.find(obj => {
		return obj.id === 1;
	});
	
	// 👇️ {id: 1, country: 'Austria'}
	// console.log(found);
	
	// ✅ Find multiple objects that satisfy condition
	const filtered = arr.filter(obj => {
		return obj.name === '옥스퍼드 패널 원피스';
	});
	console.log(filtered);

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={12}>
				<Typography pb={3} variant="h5" component="div">
					{product.name}
				</Typography>
			</Grid>
			{/* <Divider variant="middle" /> */}
			<Grid item xs={3}>
				<Typography pb={3} variant="h5" component="div">
					가격
				</Typography>
			</Grid>
			<Grid item xs={9}>
				<Typography pb={3} variant="h5" component="div">
					{product.price}
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
			<Grid item xs={3}>
				<Typography pb={3} variant="h5" component="div">
					색상
				</Typography>
			</Grid>
			<Grid item xs={9}>
				<Typography pb={3} variant="h5" component="div">
					{product.color}
				</Typography>
			</Grid>
			<Grid item xs={3}>
				<Typography pb={3} variant="h5" component="div">
					사이즈
				</Typography>
			</Grid>
			<Grid item xs={9}>
				<Typography pb={3} variant="h5" component="div">
					{product.size}
				</Typography>
			</Grid>
		</Grid>	
  )
}

export default ProductInfoText