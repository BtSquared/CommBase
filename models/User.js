const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    displayName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    passwordDigest: { type: String, required: true },
    servers: { type: Array, required: false, default: [] },
    roles: { type: Array, required: false, default: [] },
    bio: { type: String, required: false },
    profilePicture: { type: String, required: false, default: 'default pfp' },
    banner: { type: String, required: false, default: 'default banner' }
  },
  {
    timestamps: true
  }
)

module.exports = User
