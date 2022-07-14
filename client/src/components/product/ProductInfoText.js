import {BrowserRouter as Router, Link} from 'react-router-dom';
import NumberProductButton from "./NumberProductButton";
import {
	Grid,
	Typography,
	Divider,
	} from '@mui/material';
import Axios from "axios"
import React, {useState, useEffect} from 'react'



const ProductInfoText = () => {


	const [image_url, image]=useState('')
	const [price_sym, price]=useState('')
	const [lists,viewlist]=useState([
		{
			"id": 0,
			"name": "",
			"count": "",
			"color": "",
			"size": "",
			"image_url": "",
			"price": ""
		}
	])
	const [selectedId, setSelectedId]= useState(0)
	useEffect(() => { Axios.get('http://localhost:3001/api/get').then((response)=>{
		console.log(response)
		console.log(response.data[0])
		viewlist(response.data)
	})},[])           


	return (
	<>
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={12}>
				<Typography pb={3} variant="h5" component="div">
					{lists[0].name}
				</Typography>
			</Grid>
			<Grid item xs={3}>
				<Typography pb={3} variant="h5" component="div">
					가격
				</Typography>
			</Grid>
			<Grid item xs={9}>
				<Typography pb={3} variant="h5" component="div">
					{lists[0].price}
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
					{lists[0].color}
				</Typography>
			</Grid>
			<Grid item xs={3}>
				<Typography pb={3} variant="h5" component="div">
					사이즈
				</Typography>
			</Grid>
			<Grid item xs={9}>
				<Typography pb={3} variant="h5" component="div">
					{lists[0].size}
				</Typography>
			</Grid>
		</Grid>	
	</>
  )
}

export default ProductInfoText