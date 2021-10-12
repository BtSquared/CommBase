const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Post = require('./Post')

const Channel = new Schema(
  {
    name: { type: String, require: true },
    permission: { type: Array, required: true, default: [] },
    posts: [Post]
  },
  {
    timestamps: true
  }
)

module.exports = Channel
