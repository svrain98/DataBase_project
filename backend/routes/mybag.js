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
  console.log(uid);
  console.log('나라가마');
  connection.query('select * from good natural join basket where uid=(?)',[uid], function(error,results,fields){
    console.log(results);
    res.send(results);
  });
});
module.exports=router;
