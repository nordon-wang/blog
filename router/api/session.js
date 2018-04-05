const md5 = require('blueimp-md5');
const moment = require('moment')

const common = require('../../common/index');


/**
 * 登陆接口
 */
exports.list = async function (req, res, next) {

	try {
		let { nickname, pwd } = req.body;
		console.log(req.body);
		let sqlStr = `select * from admin_table where  nickname='${nickname}'`
		let data = await common.query(sqlStr)
		res.status(200).json({
			data: req.body
		});
	} catch (err) {

	}
}

/**
 * 注册 接口
 */
exports.create = async function (req, res, next) {
	// email  nickname password regist_time modify_time img
	let { email, nickname, pwd } = req.body;
	req.body.pwd = md5(pwd)

	let sqlStr = `insert into admin_table (email, nickname, password, regist_time, modify_time, img) values(
		'${email}','${nickname}','${md5(pwd)}',${Date.now()},${Date.now()},'sad'
	)`;
	const data = await common.query(sqlStr)

	res.status(200).json({
		data: req.body
	});
}

exports.patch = async function (req, res, next) {
	console.log('session patch');
}

exports.delete = async function (req, res, next) {
	console.log('session delete');
}