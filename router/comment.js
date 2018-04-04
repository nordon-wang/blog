const md5 = require('blueimp-md5');

const common = require('../common/index');


export.list = async function(req,res,next){
	console.log('comment get');
}

export.create = async function(req,res,next){
	console.log('comment create');
}

export.patch = async function(req,res,next){
	console.log('comment patch');
}

export.delete = async function(req,res,next){
	console.log('comment delete');
}