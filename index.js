const express = require('express')
const expressStatic = require('express-static')
const bodyParser = require('body-parser')
const multer = require('multer')
const mysql = require('mysql')
const moment = require('moment')

const _ = require('lodash')


const router = require('./router/index')


let server = express();

let db = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'111111',
	database:'wy'
});



server.use(bodyParser.urlencoded({
	extended:false
}))



server.get('/',(req,res,next) => {

	db.query(`select * from wystu`,(err,data) => {
		if(err) {
			console.log(err);
		}
		console.log(data);
		console.log('test');
	});

	res.status(200).json({
		msg:"success"
	})
})


server.use(router())

server.use((req,res,next) => {
	console.log('我的错误中间件',err);
})





let fun = _.debounce(() => {
	console.log('test');
},500)



for (var i = 0; i < 500; i++) {
	fun();
}

server.listen(3000)