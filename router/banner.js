const md5 = require('blueimp-md5');
const common = require('../common/index');



exports.list = async function(req,res,next){
	console.log('banner get');
	res.status(200).json({
		data: 'banner get'
	});
}

exports.create = async function(req,res,next){
	console.log('banner create');
	res.status(200).json({
		data: 'banner create'
	});
}

exports.patch = async function(req,res,next){
	console.log('banner patch');
}

exports.delete = async function(req,res,next){
	console.log('banner delete');
}