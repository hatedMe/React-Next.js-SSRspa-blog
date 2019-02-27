const Redis = require('../redisInit');
const Status = require('../utils/respones');

module.exports = async function checkToken(ctx,next) {
    const isToken = await Redis.client.get('token');
    const Authorization = ctx.request.header['Authorization'] ;
    // ctx.request.body.fields['Authorization']
    if( ctx.request.method === 'POST' &&  isToken !== Authorization ) {
        ctx.response.state = 417
        // return ctx.throw(417,'token is error')
        return ctx.body = Status.error(417 , 'token is error');
    }
    return next();
}