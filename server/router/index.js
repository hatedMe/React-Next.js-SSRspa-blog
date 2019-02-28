const Router = require('koa-router');
const koaBody = require('koa-body')();
const checkToken = require('../middleware/authorization');
const router = new Router({
    prefix : '/blog/server/v1'
});

const user = require('./user');

router.use('*' , koaBody , async (ctx, next) => {
    await next();
});


router.use('/user', user.routes(), user.allowedMethods());




module.exports = router;