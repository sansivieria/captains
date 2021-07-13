require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
const Log = require('./models/log');
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
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// restful routes

// index
app.get('/logs', (req, res) => {
  Log.find({}, (err, indexLog) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Index', {logs: indexLog})
    }
  })
});


// new
app.get('/logs/new',(req,res)=>{
  res.render('New');
});


// delete
app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err, showLog) => {
    if(err) {
      res.status(404).send({
        msg: err.message
      });
    } else {
      res.redirect('/logs')
    }
  });
});


// update
app.put('/logs/:id',(req,res) => {
  if(req.body.shipIsBroken ==='on') {
     req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateLog) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Show', {log: updateLog})
    }
  })
});


// create
app.post('/logs',(req,res) => {
  if(req.body.shipIsBroken ==='on') {
     req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (err, createLog) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.redirect('/logs');
    }
  })
});


// edit
app.get('/logs/edit/:id', (req, res) => {
  Log.findById(req.params.id, (err, showLog) => {
    if (err) {
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Edit', {log: showLog})
    }
  })
});


// show
app.get('/logs/:id', (req, res) => {
  Log.findById(req.params.id, (err, showLog) => {
    if (err) {
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Show', {log: showLog})
    }
  })
});




app.listen(PORT,()=>{
  console.log('welcome to port ', PORT);
});
