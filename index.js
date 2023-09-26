const express = require('express'); // commonjs
const app = express();// khởi chạy dự án
const morgan = require('morgan');
const router = require('./routers');


app.use(morgan("combined")); 
app.use(express.json());
app.use(router);



const products = [1, 2, 3];

app.get('/product', (req, res) => {
   return res.status(200).json(products);
});

app.post('/product', (req, res) => {
   return res.status(201).json({ message: 'Create success' });
});

app.put('/product/:id', (req, res) => {
    const productId = req.params.id;
    console.log('ID tương ứng là: ', productId);
    return res.status(200).json({message: 'Update success'});
});

app.delete('/product/:id', (req, res) => {
    const productId = req.params.id;
    console.log('ID tương ứng:', productId);
    return res.status(200).json({message: 'Remove success'});
})


app.listen(3001, ()=>{
    console.log("server is running!");
})