import Axios from "axios"
import React, {useState, useEffect} from 'react'
import QRpage from './QRpage';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'




// const submitReview =() => {
//   Axios.post('http://localhost:3001/apit/insert',{image_url: image_url, name: name, color: color, count: count,size: size,price: price})
// .then(() => {
// alert('successfully inserted')
// })
// }


// const [item,itemlist]= useState('')

const MainPage = () => {
  const [image_url, image]=useState('')
  const [price_sym, price]=useState('')
  const [lists,viewlist]=useState([])
  useEffect(() => { Axios.get('http://localhost:3001/api/get').then((response)=>{
    console.log(response)
    viewlist(response.data)
  })},[])


  return (
    <div style={{ textAlign : 'center'}}>
      MainPage
      <br></br>
      <h1>DressUP!!</h1>
      <Link to='./QRpage'>
      <button>QR 구매</button>
      </Link>
      <button>QR 재고확인</button>
      {lists.map((val)=>{
       return <h1>Color: {val.color} | 
       Size: {val.size} </h1>})}
    </div>
)}



export default MainPage;
