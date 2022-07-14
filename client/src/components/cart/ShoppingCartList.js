import React, { useState, useCallback } from 'react';
import Carousel from 'better-react-carousel';
import {
	Grid,
	Typography,
	Button,
	Divider,
	} from '@mui/material';
	
const arr = [
	{id: 1, name: '버튼 업 데님 청자켓', price: '120,000원', count: '1', color: '라이트 로즈', size: 'xs',
  url: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647439234-01152_33080-137919_700x.jpg?crop=1.00xw:0.637xh;0,0.186xh&resize=480:*",
		"https://picsum.photos/800/600?random=2",
		"https://picsum.photos/800/600?random=3",
		"https://picsum.photos/800/600?random=4",
		"https://picsum.photos/800/600?random=4",
	  ]},
	{id: 2, name: '검정 슬랙스', price: '60,000원', count: '1', color: '라이트 블루', size: 'xs',
  url: ["http://m.dunchi.co.kr/web/product/medium/202110/67dc05e6dc944401fdd1ec6e9a1ddd96.jpg",
		"https://picsum.photos/800/600?random=2",
		"https://picsum.photos/800/600?random=3",
		"https://picsum.photos/800/600?random=4"]},
	{id: 3, name: '나이키 킬샷 레더 2', price: '80,000원', count: '2', color: '블랙', size: 's',
  url: ["https://static.nike.com/a/images/t_default/exz5hx5lva0ysh6ghhco/killshot-2-leather-mens-shoe-zrq1wk.png",
		"https://picsum.photos/800/600?random=6",
		"https://picsum.photos/800/600?random=7",
		"https://picsum.photos/800/600?random=8"]},
	{id: 4, name: '릴랙스드 핏 팬츠', price: '70,000원', count: '3', color: '단색', size: 'L',
  url: ["https://www.costco.co.kr/medias/sys_master/images/h3d/hec/102204227223582.jpg",
		"https://picsum.photos/800/600?random=2",
		"https://picsum.photos/800/600?random=1",
		"https://picsum.photos/800/600?random=2"]}
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