const md5 = require('blueimp-md5');

const common = require('../common/index');


/**
 * 登陆页面
 */
exports.list =  function(req, res, next) {

    res.render('session/login.ejs')
    // res.status(200).json({
    //     msg: 'user patch'
    // })
}

/**
 * 注册页面
 */
exports.create =  function(req, res, next) {

    res.render('session/regist.ejs')
   res.status(200).json({
        msg: 'user patch'
    })

}

exports.patch = function(req, res, next) {

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