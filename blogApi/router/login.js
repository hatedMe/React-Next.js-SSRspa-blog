


const Router = require('koa-router');
const koaBody = require('koa-body')();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const config = require('../conf/config');
const client = require('../model/redis');
const User = require('../mongdbmodels/user');

const router = new Router();

router.post('/', koaBody, async(ctx, next) => {
    let {name, password} = ctx.request.body;
    
    let res = await User.findOne({name, password});
    if( res !== null ){
        let token = jwt.sign({ userInfo: `${name}` }, 'token',{ expiresIn: config.tokenExpiresIn });
        client.set('token', token,'EX', config.tokenExpiresIn,()=>{
            console.info('token is sueess');
        });
        ctx.body = JSON.parse(`{"status": 200,"message":"获取成功","token":"${token}"}`);
    }else{
        ctx.body = JSON.parse(`{"status": "400100","message":"账号密码不对称"}`);
    }
})

// router.get('/', (ctx, next) => {
//     ctx.body = JSON.parse(`{"status": "200","message":"修改成功"}`);
// });


module.exports = router;