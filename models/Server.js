const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Channel = require('./Channel')

const Server = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    whiteList: { type: Array, required: true, default: [] },
    blackList: { type: Array, required: true, default: [] },
    channels: [Channel]
  },
  {
    timestamps: true
  }
)

module.exports = Server
