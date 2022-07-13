import React, { useState, useCallback } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {
	Grid,
	Button,
	ButtonGroup,
	} from '@mui/material';
import { prototype } from 'react-modal';
import {handleAddItem} from '../cart/ShoppingCartList';

const arr = [
	{id: 1, name: '옥스퍼드 패널 원피스', price: '1,000,000원', count: '1', color: '라이트 로즈', size: 'xs',
  url: ["https://picsum.photos/800/600?random=1",
		"https://picsum.photos/800/600?random=2",
		"https://picsum.photos/800/600?random=3",
		"https://picsum.photos/800/600?random=4",
		"https://picsum.photos/800/600?random=4",
	  ]},
	{id: 2, name: '옥스퍼드 패널 원피스', price: '1,000,000원', count: '1', color: '라이트 블루', size: 'xs',
  url: ["https://picsum.photos/800/600?random=1",
		"https://picsum.photos/800/600?random=2",
		"https://picsum.photos/800/600?random=3",
		"https://picsum.photos/800/600?random=4"]},
	{id: 3, name: 'aaa', price: '1,000원', count: '2', color: '블랙', size: 's',
  url: ["https://picsum.photos/800/600?random=5",
		"https://picsum.photos/800/600?random=6",
		"https://picsum.photos/800/600?random=7",
		"https://picsum.photos/800/600?random=8"]}
];

const ProductInfoButtons = (history) => {
	const [item, updateItem] = useState({
		id: 0,
		name: '',
		price: '',
		url: ''
	  });
	// const { id, name, price, count } = inputitem;
	// console.log(item);
	const onChange = useCallback(
		e => {
		  const { name, value } = e.target;
		  updateItem({
			...item,
			[name]: value
		  });
		},
		[item]
	  );
	
	// const { id, name, price, count, color, size, url } = prototype;
	// const addCart = () => {handleAddItem(id)}
  return (
	<Grid 
		pt={3}
		container justifyContent="center" 
		alignItems="center">
		<ButtonGroup>
			<Link to="/payment" style={{ textDecoration: 'none' }}>
				<Button onClick={() => history.push('/payment')}
					style={{
					backgroundColor: "#000000"
					}}
					sx={{mx:1}}
					variant="contained" 
					size="large"
				>구매하기</Button>
			</Link>
			<Button 
				onClick={() => updateItem(item)} 
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
console.log(updateItem);
}

export default ProductInfoButtons;