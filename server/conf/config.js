const env = process.env

module.exports = {
    serverPort: env.serverPort || 8600,

    mongoHost: env.mongoHost || '39.96.202.151',
    mongoDatabase: env.mongoDatabase || 'blog',
    mongoPort: env.mongoPort || 27017,

    redisHost: env.redisHost || '47.93.26.249',
    redisPort: env.redisPort || 6379,
    redisPassword: env.redisPassword || 'mumu9943',

    tokenSecret: env.tokenSecret || 'token',
    tokenExpiresIn: env.tokenExpiresIn || 7200 * 2,

    defaultAdminName: env.defaultAdminName || 'admin',
    defaultAdminPassword: env.defaultAdminPassword || '123456'
}