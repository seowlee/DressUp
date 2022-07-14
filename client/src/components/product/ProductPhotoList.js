import React from 'react';
import Carousel from 'better-react-carousel';

const ProductPhotoList = () => {
  const arr = [
		{id: 1, name: '옥스퍼드 패널 원피스', price: '1,000,000원', count: '1', color: '라이트 로즈', size: 'xs',
      url: ["https://cdn.imweb.me/thumbnail/20220509/3d7ab001e24a0.jpg",
            "https://ae01.alicdn.com/kf/HTB1V0VwkaQoBKNjSZJnq6yw9VXaQ/Men-Tapered-Denim-Collection-Low-Rise-Design-Masculina-Pantalon-Denim-Bermuda.jpg",
            "https://media.istockphoto.com/photos/confidence-is-the-first-step-to-happiness-picture-id471947578?b=1&k=20&m=471947578&s=170667a&w=0&h=3cRv6ae9BLWMsBC3qs-7K-y1hoEvpJ0k8uWRyrMjdjY=",
            "https://thebounce.co.kr/web/product/extra/small/202204/0a14939adb5250c9fce5bf76b698d865.jpg"]},
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
  console.log("hahahahah")
  console.log(arr[0].url)
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
        <img width="100%" height='100%' src={data} />
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