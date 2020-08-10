const mysql = require('mysql');


//使用连接池连接数据库
function OptPool() {
    this.flag = true;
    this.pool = mysql.createPool({
        host: "localhost",
        database: "myboke",
        user: "root",
        password: "123456",
        port: '3306',
    });
    this.getPool = function () {

        if (this.flag) {

            this.pool.on('connection', function (connection) {

                connection.query('SET SESSION auto_increment_increment=1');

                this.flag = false;

            });

        }
        return this.pool;
    }
}

module.exports = OptPool;