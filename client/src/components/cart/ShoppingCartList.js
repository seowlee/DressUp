import React, { useState, useCallback } from 'react';
import Carousel from 'better-react-carousel';
import {
	Grid,
	Typography,
	Button,
	Divider,
	} from '@mui/material';
	
	const arr = [
		{id: 1, name: '테이퍼드핏 데님 팬츠', price: '100,000원', count: '1', color: '워시드 블루', size: 'M',
		url: ["https://contents.lotteon.com/itemimage/_v121057/LO/16/45/32/86/32/_1/64/53/28/63/3/LO1645328632_1645328633_1.jpg/dims/resizef/720X720",
			  "https://picsum.photos/800/600?random=2",
			  "https://picsum.photos/800/600?random=3",
			  "https://picsum.photos/800/600?random=4"]}
	
	  ];
const ShoppingCartList = () => {
	const [list, updateList] = useState(arr);
	// const addHandeler = () => {
	// 	const newId = nanoid();
	// 	setIds((ids) => [...ids, newId]);
	// };
	
	

	const handleRemoveItem = (selectedId) => {
		const id = selectedId;
		// console.log(id)
		//  updateList(list.filter(data => data.id !== id));
		const temp = [...list];
		// console.log(temp);
		temp.splice(id-1, 1);
		// console.log(temp);
		updateList(temp);
		// console.log(list)
	};
  return (
	<Carousel hideArrow={true} cols={1} rows={arr.length} gap={10} loop>
      {list.map((data)=>{
        return <Carousel.Item key={data.id}>
			<Grid 
				backgroundColor="#E1DEDE" 
				pl={3} pt={2} 
				container rowSpacing={-2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6}>
					<img width="50%" src={data.url[0]} />
				</Grid>
				<Grid item xs={4}>
					<Typography pt={3} pb={3} variant="h5" component="div" align='left'>
						{data.name}
					</Typography>
					<Typography variant="h6" component="div" align='left'>
						{data.price}
					</Typography>
					<Typography variant="h6" component="div" align='left'>
						{data.color}
					</Typography>
					<Typography variant="h6" component="div" align='left'>
						{data.size}
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<Button onClick={()=> {handleRemoveItem(data.id)}}
						style={{
							backgroundColor: "#000000"
						}}
						variant="contained" size="large">삭제</Button>
				</Grid>

			</Grid>
      </Carousel.Item>
      })}
    </Carousel>
  )
}

export default ShoppingCartList;