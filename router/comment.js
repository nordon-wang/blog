const md5 = require('blueimp-md5');

const common = require('../common/index');


exports.list = async function(req,res,next){
	console.log('comment get');
}

exports.create = async function(req,res,next){
	console.log('comment create');
}

exports.patch = async function(req,res,next){
	console.log('comment patch');
}

exports.delete = async function(req,res,next){
	console.log('comment delete');
}