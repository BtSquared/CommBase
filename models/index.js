const mongoose = require('mongoose')
const UserSchema = require('./User')
const ServerSchema = require('./Server')

User = mongoose.model('users', UserSchema)
Server = mongoose.model('servers', ServerSchema)

module.exports = {
  User,
  Server
}
