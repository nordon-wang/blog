const express = require('express')
const static = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const ejs = require('ejs')
const jade = require('jade')
const consolidate = require('consolidate')
const mysql = require('mysql')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const moment = require('moment')


const router = require('./router/index')
const adminRouter = require('./router/admin/admin')
const apiRouter = require('./router/api/index')

let server = express();

let db = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'learn'
});


/**
 * 普通的数据处理
 */
server.use(bodyParser.urlencoded({
	extended:false
}));

/**
 * 文件传输处理
 */
let multerObj = multer({
	dest:'./static'
})
server.use(multerObj.any())


/**
 * cookie seesion 配置
 */
server.use(cookieParser('asdasdasd'))

let keysArr =  [];
for (let i = 0; i < 100000; i++) {
    keysArr.push('mykeys' + Math.random());
}
server.use(cookieSession({
	name:'nordon',
	keys:keysArr,
	maxAge:1000 * 3600 * 24
}))


/**
 * 模板引擎配置
 */
server.set('view engine','html') //输出的是啥
server.set('views','./template') //模板文件路径
server.engine('html',consolidate.ejs) //使用那种模板


// server.get('/admin',(req,res,next) => {

// })

/**
 * 管理员 路由配置
 */
server.use('/admin',adminRouter())


/**
 * 路由配置
 */
server.use(router())

/**
 * 接口处理
 */
server.use('/api',apiRouter())



// server.use((req,res,next) => {
// 	console.log('我的错误中间件');
// })



server.listen(3000,(err) => {
	if(err){
		console.log('服务启动失败...')
	}

	console.log('服务启动成功....')
	console.log('端口是3000...')
})

/**
 * 静态文件配置
 */
server.use(static('./static'))