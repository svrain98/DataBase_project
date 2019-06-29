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
router.post('/', async function(req,res,next){
  var sid=req.body.sid;
  connection.query('delete from good where sid=(?)',[sid], function(error,results,fields){
    res.send('good');
  });
});
module.exports=router;
