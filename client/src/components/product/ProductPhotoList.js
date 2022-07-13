import React from 'react';
import Carousel from 'better-react-carousel';

const ProductPhotoList = () => {
  const arr = [
		{id: 1, name: '옥스퍼드 패널 원피스', price: '1,000,000원', count: '1', color: '라이트 로즈', size: 'xs',
      url: ["https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
            "https://picsum.photos/800/600?random=4"]},
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
  // const product = arr.find(obj => {
	// 	return obj.id === 1;
	// });
  // console.log(product.url);

  // const productPhotos = product.url.map((url, idx) => {
  //   console.log(url);
  // });

  return (
    <Carousel 
		cols={1} 
		rows={1} 
		gap={10} 
		showDots={true} 
		dotColorActive="#646262" 
		loop>
      {arr[0].url.map((data)=>{
        return <Carousel.Item key={data.id}>
        <img width="100%" src={data} />
      </Carousel.Item>
      })}
      {/* 
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>*/}
    </Carousel>
  );
};

export default ProductPhotoList;