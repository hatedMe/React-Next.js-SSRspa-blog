
const env = process.env

module.exports = {
  serverPort: env.serverPort || 4040,

  mongoHost: env.mongoHost || '47.93.26.249',
  mongoDatabase: env.mongoDatabase || 'webchat',
  mongoPort: env.mongoPort || 27017,

  redisHost: env.redisHost || '47.93.26.249',
  redisPort: env.redisPort || 6379,
  redisPassword: env.redisPassword || 'mumu9943',

  tokenSecret: env.tokenSecret || 'token',
  tokenExpiresIn: env.tokenExpiresIn || 3600,

  defaultAdminName: env.defaultAdminName || 'admin',
  defaultAdminPassword: env.defaultAdminPassword || '123456'
}