import React from 'react'
import Carousel from 'better-react-carousel'

const StockList = () => {
  const arr = [
		{id: 1, name: '테이퍼드핏 데님 팬츠', price: '1,000,000원', count: '15', color: '블루', size: 'XS,S,M',
      url: ["https://contents.lotteon.com/itemimage/_v121057/LO/16/45/32/86/32/_1/64/53/28/63/3/LO1645328632_1645328633_1.jpg/dims/resizef/720X720",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4"]},
		{id: 2, name: '테이퍼드핏 데님 팬츠', price: '1,000,000원', count: '3', color: '라이트 블루', size: 'S,M,L',
      url: ["https://image.msscdn.net/images/prd_img/20220316/2422515/detail_2422515_1_500.jpg?t=20220418164118",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4"]},
		{id: 3, name: '테이퍼드핏 데님 팬츠', price: '1,000원', count: '2', color: '블랙', size: 'M,L,XL',
      url: ["https://img04.gugus.co.kr//updata2/2022/03/24/637837316356990249.jpg?cmd=thumb&w=800",
            "https://picsum.photos/800/600?random=6",
            "https://picsum.photos/800/600?random=7",
            "https://picsum.photos/800/600?random=8"]},
		{id: 4, name: '테이퍼드핏 데님 팬츠', price: '50,000원', count: '3', color: '워시드 블랙', size: 'L,XL',
      url: ["http://openimage.interpark.com/goods_image_big/8/2/7/8/8225848278_l.jpg",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2"]},

    {id: 4, name: '테이퍼드핏 데님 팬츠', price: '50,000원', count: '5', color: '그레이', size: 'S,M,XL',
      url: ["https://image.thehyundai.com/static/0/4/2/46/A1/hnm40A1462400_1038622002_202205_PP_0123-S_720.JPG",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2"]}
	];
  const stockarr = arr.filter(obj => {
    return obj.name === '테이퍼드핏 데님 팬츠';
  });
  // console.log(typeof stockarr);

  return (
    <Carousel cols={4} rows={1} gap={10} loop>
      {stockarr.map((data)=>{
        return <Carousel.Item key={data.id}>
        <img width="100%" src={data.url[0]} />
        <div>{data.name}</div>
        <div>{data.size}</div>
        <div>{data.color}</div>
        <div>{data.count}</div>
      </Carousel.Item>
      })}
    </Carousel>
  );
};

export default StockList;