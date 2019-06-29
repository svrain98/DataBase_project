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
router.post('/',async function(req,res, next){
  var sid= req.body.sid;
  console.log(sid);
  connection.query('select * from good where sid=(?)',[sid], function(error, result, fields){
    console.log(result);
  res.send(result[0]);
 });
});

module.exports=router;
