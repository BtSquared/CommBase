const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    servers: { type: Array, required: true },
    roles: { type: Array, required: true },
    bio: { type: String, required: false },
    profilePicture: { type: String, required: false },
    banner: { type: String, required: false }
  },
  {
    timestamps: true
  }
)

module.exports = User
