require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const Log = require('./models/log')
// db
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
})
mongoose.connection.once('open',()=>{
    console.log('mongo number five')
})
// jsx engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}))
// restful routes

// index

// new
app.get('/logs/new',(req,res)=>{
  res.render('New');
});

// delete

// update

// create
app.post('/logs',(req,res)=>{
  if(req.body.shipIsBroken ==='on') {
     req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  res.send(req.body);
});
// edit

// show



app.listen(PORT,()=>{
  console.log('welcome to port ', PORT);
})
