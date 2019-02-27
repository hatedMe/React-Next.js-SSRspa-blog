const config = require('../conf/config');
const jwt = require('jsonwebtoken');
const { Schema } = require('../DBinit');
const User = require('../model/user');
const Redis = require('../redisInit');
const Status = require('../utils/respones');

class Login {
    static async login (ctx , next) {
        const {name, password} = ctx.request.body;
        const result = await User.findOne({name, password});
        if( !name || !password) return ctx.body = Status.error( 400 , '缺少相关参数');
        if( !result ) return ctx.body = Status.error( 400 ,'账号密码不对称');
        const token = jwt.sign({ userInfo: `${name}` }, 'token',{ expiresIn: config.tokenExpiresIn });
        await Redis.client.set('token', token,'EX', config.tokenExpiresIn);
        ctx.body = Status.success({token});
    }
}


module.exports = Login