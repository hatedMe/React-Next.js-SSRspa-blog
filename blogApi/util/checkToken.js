




const client = require('../model/redis');



module.exports = async function checkToken(ctx,next) {
    let isToken = () =>{
        return new Promise((resolve, reject) => {
            client.get('token',(err,token) => {
                resolve(err !== null ? err : token)
            });
        })
    }
    
    let access_token = ctx.request.headers['access_token'] 
        || ctx.request.body['access_token'] 
        || (typeof ctx.request.body.fields === 'undefined' ?  'undefined' : ctx.request.body.fields['access_token']);
    
    if( ctx.request.method === 'POST' && ( typeof access_token === 'undefined' || await isToken() !== access_token ) ) {
        return ctx.body = JSON.parse(`{"status": "400120","message":"token is error"}`);
    }else{
        return next();
    }
    //return next();
}