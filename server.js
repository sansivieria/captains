const express = require('express');
const app = express();
const PORT = 3000;

// db

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
