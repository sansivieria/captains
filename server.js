const express = require('express');
const app = express();
const PORT = 3000;

// db

// jsx engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// restful routes

// index

// new
app.get('/logs/new',(req,res)=>{
  res.render('New')
})

// delete

// update

// create

// edit

// show



app.listen(PORT,()=>{
  console.log('welcome to port ', PORT);
})
