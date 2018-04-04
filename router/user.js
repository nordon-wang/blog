const md5 = require('blueimp-md5');

const common = require('../common/index');



exports.get = async function(req, res, next) {
        
    const str = `select * from blog  
    limit 0,20`;
    const data = await common.query(str);

    console.log(data);

    res.status(201).json({
        data:data
    });
}

exports.post = async function(req, res, next) {

   try{
    let { name,password,age,email } = req.body;

    password = md5(password);

    const sqlStr = `insert into blog (name,password,age,email) 
    values('${name}','${md5(password)}',${age},'${email}')`;
    
    let {insertId} = await common.query(sqlStr);

    let msg = await common.query(`select * from blog where id=${insertId}`)
    res.status(201).json({
        data: msg
    });
   }catch(err){
    next(err);
   }

}

exports.patch = function(req, res, next) {
    let patchId  = req.params;
    let {name} = req.body;
    const sqlStr = `update blog set name='${name}' where id=${patchId}`;

    // let data  = await common.query(sqlStr);

    res.status(200).json({
        msg: 'user patch'
    })
}

exports.delete = function(req, res, next) {
    res.status(200).json({
        msg: 'user delete'
    })
}