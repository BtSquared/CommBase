const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    content: { type: String, required: false },
    img: { type: String, required: false }
  },
  {
    timestamps: true
  }
)

module.exports = Post
