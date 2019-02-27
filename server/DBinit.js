






const mongoose = require('mongoose');
const config = require('./conf/config');
mongoose.Promise = global.Promise;
const DB = mongoose;


// export const { Schema } = mongoose;



const connect = () => {
    const db = DB.connect(`mongodb://root:root@${config.mongoHost}/${config.mongoDatabase}`,{useMongoClient: true});
    db.once('open', () =>{
        console.info(`listening on port && 数据库连接成功 =======> ok`);
    });
    return db;
}


exports.DB = DB;
exports.connect = connect;
exports.Schema = DB.Schema;
