var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '9298qkr!',
  database : 'shop'
});

connection.connect();
router.post('/',function(req,res,next){
  var uid=req.body.user.uid;
  var password=req.body.user.password;
  var name=req.body.user.name;
  var address=req.body.user.address;
  var phone=req.body.user.phone;
  connection.query('insert into user (name, uid, password, phone, address) values (?,?,?,?,?)',[name, uid, password, phone, address], function(error,results,fields){
    if(error){
      console.error(err);
      res.send({result: 0});
      return;
    }
    res.send({result: 1});
  });
});
module.exports=router;
