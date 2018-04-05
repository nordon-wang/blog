const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const mysql = require('mysql')
const moment = require('moment')


// const sessionController = require('./session');
// const bannerController = require('./banner');



module.exports = () => {
    let router = express.Router()

    /**
     * 登陆页面
     */
    router.use('/login', (req, res, next) => {
        res.render('session/login.ejs')
    })

    /**
     * 注册页面
     */
    router.use('/regist', (req, res, next) => {
        res.render('session/regist.ejs')
    })

    // router.use((req, res, next) => {

    //     if (req.url == 'favicon.ico') {
    //         return false;
    //     }

    //     /**
    //      * 设置cookie
    //      */
    //     res.cookie('nordon', 'my-cookie', {
    //         path: '/',
    //         maxAge: 1000 * 3600,
    //         signed: true
    //     })

    //     // res.render('session/regist.ejs')
    //     // console.log('object1111111111111');
    // })


	/**
	 * 管理员 CRUD
	 */
    // router
    // 	.get('/login',sessionController.list)
    // 	.post('/login',sessionController.create)
    // 	.patch('/login/:id',sessionController.patch)
    // 	.delete('/login/:id',sessionController.delete)



	/**
	 * banner
	 */
    // router
    // 	.get('/admin/banner',bannerController.list)
    // 	.post('/admin/banner',bannerController.create)
    // 	.patch('/admin/banner/:id',bannerController.patch)
    // 	.delete('/admin/banner/:id',bannerController.delete)

    // router.get('/login', (req, res, next) => {

    // })

    // router.post('/login', (req, res, next) => {

    // })

    return router;
}