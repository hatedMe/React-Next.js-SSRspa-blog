const Koa = require('koa');
const koaCors = require('koa-cors');
// const jwt = require('jsonwebtoken');
const DB = require('./DBinit');
const Redis = require('./redisInit');
const config = require('./conf/config');
const app = new Koa();
const router = require('./router/index');

DB.connect();
Redis.connect();


app.use( koaCors() );
app.use(router.routes()).use(router.allowedMethods());


app.listen(config.serverPort , e =>{
    console.info(`listening on port ${config.serverPort}`);
});
