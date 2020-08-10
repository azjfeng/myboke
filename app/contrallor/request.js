const Request  = require('../model/request')

module.exports = {
    index:async(ctx,next)=>{
        await Request.index(ctx)
    },
    loadImgInfo:async(ctx,next)=>{
        let result = await Request.loadImgInfo();
        ctx.body = {arr:result}
    },
    upload:async(ctx,next)=>{
        let result  = await Request.upload(ctx)
         ctx.body = {arr:result}
    }
}