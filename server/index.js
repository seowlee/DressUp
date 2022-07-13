const express = require('express');
const app = express();
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors= require('cors')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}));

const db= mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '1234',
    database:'fintech'
});



app.get('/api/get',(req,res) => {
    const sqlSelect= 'SELECT * FROM item_list';
    db.query(sqlSelect, (err,result) =>
        {res.send(result)
})
})



// app.post('/api/insert',(req,res) => { 
//     const image_url = req.body.image_url
//     const name= req.body.name
//     const color=req.body.color
//     const count= req.body.count
//     const size= req.body.size
//     const price= req.body.price
//     const sqlInsert= 'INSERT INTO basket (image_url, name, color, count,size,price) VALUES (?,?,?,?,?,?)'
//     db.query(sqlInsert, [image_url, name, color, count,size,price], (err,result) =>
//         {console.log(result)})
// })

// const sqlInsert = "INSERT INTO item_list (name,count,color,size,image_url,price) VALUES ('jeans','20','Navy','L','https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwbf7fa769/original/90_1006372-1A04165_1D360_10_MedusaTwistedJeans-PantsandShorts-versace-online-store_0_0.jpg?sw=1440&sh=2000&sm=fit&sfrm=jpg','100000')"
// db.query(sqlInsert,(err,result)=>{
//     res.send('hello pedro')
// })


app.listen(3001,() => {console.log(

'running on port 3001')   
})


module.exports=app;




