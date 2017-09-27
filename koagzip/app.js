


const Koa =require('koa');
const Router = require('koa-router')
const gzip = require('koa-gzip');
const fs = require('fs');
const server = require("koa-static");
const path = require('path');
const app = new Koa();
const router = new Router();
// app.use(server(path.join(__dirname + '/static')));
app.use(server('.'));
 app.use( gzip() );
app.use( router.routes() );


router.get('/', async ( ctx ,next)=>{
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./index.html');
})


app.listen(8888);