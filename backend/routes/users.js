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
var uid = req.body.user;
connection.query('select * from user where uid=(?)',[uid],function(error, result, fields){
  console.log(result[0]);
   if(result[0]) {
     res.send(result[0]);
   }
   else {
      res.redirect();
   }
 });
});
module.exports=router;
