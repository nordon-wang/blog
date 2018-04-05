const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const mysql = require('mysql')
const moment = require('moment')

const userController = require('./user');
const commentController = require('./comment');
const topicController = require('./topic');

module.exports = () => {

	let router = express.Router();
	
	//  router.use('/user',(req,res,next) => {
    // 	res.render('session/regist.ejs')
	//  })


	/**
	 * 用户
	 */

	router
		.get('/user',userController.list)
		.post('/user',userController.create)
		.patch('/user/:id',userController.patch)
		.delete('/user/:id',userController.delete)
	
	/**
	 * 评论
	 */
	// router
	// .get('/comment',commentController.list)
	// .post('/comment',commentController.create)
	// .patch('/comment',commentController.patch)
	// .delete('/comment',commentController.delete)
	
	/**
	 * 话题
	 */
	// router
	// .get('/comment',topicController.list)
	// .post('/comment',topicController.create)
	// .patch('/comment',topicController.patch)
	// .delete('/comment',topicController.delete)

	return router;
}
