const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Channel = require('./Channel')

const makeCode = () => {
  let code = ''
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
  for (let i = 0; i < 10; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return code
}

const Server = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    serverName: { type: String, required: true },
    inviteCode: { type: String, default: makeCode() },
    whiteList: { type: Array, default: [] },
    blackList: { type: Array, default: [] },
    channels: [Channel]
  },
  {
    timestamps: true
  }
)

module.exports = Server
