const fs = require('fs')
const path = require('path')
const crpto = require('crypto');
const model = require('./request_model');

const hash = crpto.createHash('md5');
module.exports = {
    index: async (ctx) => {
        await ctx.render('index')
    },
    loadImgInfo:async(ctx)=>{
        let res = await model.loadImgInfo();
        return res ;
    },
    upload: async (ctx) => {
        let file = ctx.request.files
        let distPath = '', md5 = '', arr = [], input = '',  result = '',url = '',sql = ''
        for (const key in file) {
            url = `127.0.0.1:5000/public/upload/${file[key].name}`;
            sql = 'insert into imgInfo (id,url) values(0,?)'
            //    let promise =  new Promise((reslove,reject)=>{
            //         input =  fs.createReadStream(file[key].path)
            //         input.on('data',function(d){
            //             hash.update(d)
            //         })
            //         input.on('end',function(){
            //             md5 = hash.digest('hex');
            //             reslove(md5)
            //         })

            //     })
            result =  await model.insert(sql,url)
            console.log(result)
            if(result){
                distPath = path.resolve(__dirname, `../../public/upload/${file[key].name}`);
                fs.rename(file[key].path, distPath, function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                arr.push({ name: file[key].name, path: distPath, time: file[key].lastModifiedDate, fileSize: file[key].size })
            }

        }
        return arr
    }

}