const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    displayName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    passwordDigest: { type: String, required: true },
    servers: { type: Array, required: false, default: [] },
    roles: { type: Array, required: false, default: [] },
    bio: { type: String, required: false, default: '' },
    profilePicture: {
      type: String,
      default: 'https://d34y6rgwiibafg.cloudfront.net/default/avatar.png'
    },
    banner: { type: String, required: false, default: 'default banner' }
  },
  {
    timestamps: true
  }
)

module.exports = User
