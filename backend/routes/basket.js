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
  var uid=req.body.uid;
  var sid=req.body.sid;
  connection.query('insert into basket(uid,sid) values (?,?)',[uid, sid], function(error,results,fields){
    res.send("good");
  });
});
module.exports=router;
