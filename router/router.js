const Router = require('koa-router');
const router = new Router();
const Request = require('../app/contrallor/request')


router.get('/',Request.index);
router.post("/upload",Request.upload)
router.post("/loadImgInfo",Request.loadImgInfo)

module.exports = router