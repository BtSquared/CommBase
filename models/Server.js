const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Server = new Schema(
  {
    whiteList: { type: Array, required: true },
    blackList: { type: Array, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = Server
