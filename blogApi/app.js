const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body')();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = new Koa();
const router = new Router();

const koaCors = require('koa-cors')

const api = require('./router/api');
const login = require('./router/login');

const config = require('./conf/config');

app.use( koaCors() );


router.use('/api', api.routes(), api.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods());

mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://atom:123456@${config.mongoHost}/${config.mongoDatabase}`, function (err) {
// //mongoose.connect(`mongodb://${config.mongoHost}/${config.mongoDatabase}`, function (err) {
//     if (err) {
//         console.log("数据库连接失败", err);
//     } else {
//         app.listen(config.serverPort);
//         console.log(`listening on port ${config.serverPort} && 数据库连接成功 =======> ok`);
//     }
// });


let db = mongoose.connect(`mongodb://root:root@${config.mongoHost}/${config.mongoDatabase}`,{useMongoClient: true});
db.once('open',function(){
    console.info(`listening on port ${config.serverPort} && 数据库连接成功 =======> ok`);
    app.listen(config.serverPort);
});
