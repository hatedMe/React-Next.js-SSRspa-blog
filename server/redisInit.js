const config = require('./conf/config');
const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const auth = config.redisPassword ? { password: config.redisPassword } : {}
const client = redis.createClient(Object.assign({}, auth, {
    host: config.redisHost,
    port: config.redisPort
}))

client.on('error', function(err) {
   console.log.error('Redis Error ' + err)
})

const connect = () => {
    client.on('connect', function() {
        console.log('Redis is ready')
    })
}

// client.on('connect', function() {
//   console.log('Redis is ready')
// })

// module.exports = client
exports.connect = connect;
exports.client = client;