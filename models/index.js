const mongoose = require('mongoose')
const UserSchema = require('./User')
const ServerSchema = require('./Server')
const ChannelSchema = require('./Channel')
const PostSchema = require('./Post')

User = mongoose.model('users', UserSchema)
Server = mongoose.model('servers', ServerSchema)

module.exports = {
  User,
  Server,
  Channel,
  Post
}
