const mysql = require('mysql');

let pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'111111',
	database:'wy'
});


module.exports = {
	query(sqlStr){
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