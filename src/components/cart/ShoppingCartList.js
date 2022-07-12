import React from 'react';
import Carousel from 'better-react-carousel';
import {
	Grid,
	Typography,
	Divider,
	} from '@mui/material';

const ShoppingCartList = () => {
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
            "https://picsum.photos/800/600?random=8"]},
		{id: 4, name: 'bbb', price: '50,000원', count: '3', color: '단색', size: 'L',
      url: ["https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2"]},
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
				  "https://picsum.photos/800/600?random=8"]},
			  {id: 4, name: 'bbb', price: '50,000원', count: '3', color: '단색', size: 'L',
			url: ["https://picsum.photos/800/600?random=1",
				  "https://picsum.photos/800/600?random=2",
				  "https://picsum.photos/800/600?random=1",
				  "https://picsum.photos/800/600?random=2"]}
	];
  return (
	<Carousel hideArrow={true} cols={1} rows={arr.length} gap={10} loop>
      {arr.map((data)=>{
        return <Carousel.Item key={data.id}>
			<Grid 
				backgroundColor="#E1DEDE" 
				pl={3} pt={2} 
				container rowSpacing={-2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6}>
					<img width="50%" src={data.url[0]} />
				</Grid>
				<Grid item xs={6}>
					<Typography pt={3} pb={3} variant="h5" component="div" align='left'>
						{data.name}
					</Typography>
					<Typography variant="h6" component="div" align='left'>
						{data.price}
					</Typography>
				</Grid>
			</Grid>
      </Carousel.Item>
      })}
    </Carousel>
  )
}

export default ShoppingCartList