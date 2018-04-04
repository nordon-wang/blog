const md5 = require('blueimp-md5');
const common = require('../common/index');



export.list = async function(req,res,next){
	console.log('session get');
}

export.create = async function(req,res,next){
	console.log('session create');
}

export.patch = async function(req,res,next){
	console.log('session patch');
}

export.delete = async function(req,res,next){
	console.log('session delete');
}