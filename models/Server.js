const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Channel = require('./Channel')

const Server = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    serverName: { type: String, required: true },
    inviteCode: { type: String, required: true },
    whiteList: { type: Array, default: [] },
    blackList: { type: Array, default: [] },
    channels: [Channel]
  },
  {
    timestamps: true
  }
)

module.exports = Server
