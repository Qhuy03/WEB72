const express = require('express'); // commonjs
const app = express();// khởi chạy dự án
const morgan = require('morgan');
const router = require('./routers');


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

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  
    
    const apiKey = req.query.apiKey;
    const user = users.find(u => u.apiKey === apiKey);
  
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    
    const index = users.findIndex(u => u.username === user.username);
    if (index !== -1) {
      if (req.url.includes('/student')) {
        statistics[index].student++;
      } else if (req.url.includes('/teacher')) {
        statistics[index].teacher++;
      } else if (req.url.includes('/subject')) {
        statistics[index].subject++;
      }
    }
  
    next(); 
});

app.get('/system', (req, res) => {
    res.status(200).json(statistics);
});

app.listen(3001, ()=>{
    console.log("server is running!");
})
