import React from 'react';
import Carousel from 'better-react-carousel';

const RecommendationList = () => {
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
  return (
    <Carousel cols={4} rows={1} gap={10} loop>
      {arr.map((data)=>{
        return <Carousel.Item key={data.id}>
        <img width="100%" src={data.url[0]} />
        <div>{data.name}</div>
        <div>{data.price}</div>
      </Carousel.Item>
      })}
    </Carousel>
  );
};

export default RecommendationList;