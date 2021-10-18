const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Channel = require('./Channel')

const Server = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    serverName: { type: String, required: true },
    inviteCode: { type: String, unique: true, required: true },
    whiteList: { type: Array, default: [] },
    blackList: { type: Array, default: [] },
    channels: [Channel],
    deleteable: { type: Boolean, default: true },
    serverIcon: {
      type: String,
      default: 'https://d34y6rgwiibafg.cloudfront.net/default/servericon.png'
    }
  },
  {
    timestamps: true
  }
)

module.exports = Server
