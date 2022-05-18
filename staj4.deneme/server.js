var fs= require('fs');

var express = require('express');
var path = require('path');
var app = express();
const mongoose =require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/stajdeneme');

const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:7070';
MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
  
    const db = client.db('stajdeneme');
    console.log('MongoDB veritabanı bağlantısı başarıyla gerçekleştirildi.');
    client.close();
  
  });
  
app.use('/public', express.static(path.join(__dirname,'public')));

app.get('/',function (req,res){
  res.sendFile(path.join(__dirname,'/db.json'));
});
app.listen(7070 ,()=>{
  console.log ('express app listening on port http://localhost:7070')
})