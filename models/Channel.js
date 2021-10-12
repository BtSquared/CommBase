const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Channel = new Schema(
  {
    permission: { type: Array, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = Channel
