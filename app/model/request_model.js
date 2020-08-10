var OptPool = require('../../mysql/mysql');

var optPool = new OptPool();

var pool = optPool.getPool();

module.exports = {
    insert:async(sql,url)=>{
        return new Promise((reslove,reject)=>{
            pool.getConnection((err,conn)=>{
                conn.query(sql,url,function(err,result){
                    if(err){
                        console.log(err)
                        return false
                    }
                    conn.release();
                    reslove(true)
                })
            }) 
        })
           
    },
    loadImgInfo:async()=>{
        return new Promise((reslove,reject)=>{
            pool.getConnection((err,conn)=>{
                let res = ''
                let sql = 'select * from imgInfo';
                conn.query(sql,function(err,result){
                    if(err){
                        console.log(err)
                    }
                    res = result
                    conn.release();
                    reslove(res)
                })
            })
        })
    }
}