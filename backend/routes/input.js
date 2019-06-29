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
  console.log('바보야');
  connection.query('insert into public (select *,(select count(*) from basket where sid=(?)),if( (select count(*) from basket where sid=(?))>3,1,0) from good where sid=(?)) on duplicate key update sid=(?), cnt=(select count(*) from basket where sid=(?)), flag=if( (select count(*) from basket where sid=(?))>3,1,0)',[sid, sid, sid, sid, sid, sid], function(error, result, fields){
    console.log(result);
    res.send('god');
 });
});

module.exports=router;
