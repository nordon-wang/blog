const md5 = require('blueimp-md5');
const common = require('../common/index');



export.list = async function(req,res,next){
	console.log('topics get');
}

export.create = async function(req,res,next){
	console.log('topics create');
}

export.patch = async function(req,res,next){
	console.log('topics patch');
}

export.delete = async function(req,res,next){
	console.log('topics delete');
}