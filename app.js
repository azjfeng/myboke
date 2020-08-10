const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body')
const views = require('koa-views');
const path =  require('path')
const static = require('koa-static');
const router = require('./router/router.js')

app.use(views(__dirname+"/app/common/",{
    
}));
app.use(koaBody({
    multipart:true, // 支持文件上传
    formidable:{
      uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize:200 * 1024 * 1024, // 文件上传大小
      onFileBegin:(name,file) => { // 文件上传前的设置
        // console.log(`name: ${name}`);
        // console.log(file);
      },
      multiples:true
    }
}))

app.use(static(path.join(__dirname,"/")));

console.log(process.env)

app.use(router.allowedMethods()).use(router.routes())

app.listen("5000",()=>{
    console.log('http://127.0.0.1:5000')
})