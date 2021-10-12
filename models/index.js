const mongoose = require('mongoose')
const UserSchema = require('./User')
const ServerSchema = require('./Server')
const ChannelSchema = require('./Channel')
const PostSchema = require('./Post')

User = mongoose.model('users', UserSchema)
Server = mongoose.model('servers', ServerSchema)
Channel = mongoose.model('channels', ChannelSchema)
Post = mongoose.model('post', PostSchema)

module.exports = {
  User,
  Server,
  Channel,
  Post
}
