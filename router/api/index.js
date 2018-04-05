const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const mysql = require('mysql')
const moment = require('moment')

const sessionController = require('./session');

/**
 * 用于处理接口
 */

module.exports = () => {

    let router = express.Router()

    /**
     * 登陆处理
     */
    router.post('/login',sessionController.list)

    /**
     * 注册处理
     */
    router.post('/regist',sessionController.create)

    return router
}