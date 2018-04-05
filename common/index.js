const mysql = require('mysql');

let pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'learn'
});


module.exports = {
	query(sqlStr){
		/**
		 * 返回一个promise对象
		 * 用于mysql操作
		 */
		return new Promise((resolve,reject) => {

			pool.getConnection((err,connection) => {
				connection.query(sqlStr,(err,data) => {
					connection.release();
					if(err){
						reject(err)
					}
					resolve(data);
				})
			})

		});
	}
}