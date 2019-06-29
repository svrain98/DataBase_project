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
  connection.query('select * from good', function(error, result, fields){
  res.send(result);
 });
});

module.exports=router;
