const express = require('express'); // commonjs
const app = express();// khởi chạy dự án
const morgan = require('morgan');
const router = require('./routers');
const userMDL = require('./middlewares/userMDL')


app.use(morgan("combined")); 
app.use(express.json());
app.use(router);



// const products = [1, 2, 3];

// app.get('/product', (req, res) => {
//    return res.status(200).json(products);
// });

// app.post('/product', (req, res) => {
//    return res.status(201).json({ message: 'Create success' });
// });

// app.put('/product/:id', (req, res) => {
//     const productId = req.params.id;
//     console.log('ID tương ứng là: ', productId);
//     return res.status(200).json({message: 'Update success'});
// });

// app.delete('/product/:id', (req, res) => {
//     const productId = req.params.id;
//     console.log('ID tương ứng:', productId);
//     return res.status(200).json({message: 'Remove success'});
// })

const user = [
	{username: 'alice', apiKey: 'alice@123'},
  {username: 'bob', apiKey: 'bob@123'},
  {username: 'charlie', apiKey: 'charlie@123'}
];

let statistics = [
    { user: 'alice', student: 0, teacher: 0, subject: 0 },
    { user: 'bob', student: 0, teacher: 0, subject: 0 },
    { user: 'charlie', student: 0, teacher: 0, subject: 0 }
];

// app.use((req, res, next) => {
    
// });

app.get('/system/statistic',userMDL, (req, res) => {
    res.status(200).json(statistics);
});

app.listen(3001, ()=>{
    console.log("server is running!");
})
