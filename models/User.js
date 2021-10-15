const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    authId: { type: String, required: false }, //change this back to required:true once auth0 is put in
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    servers: { type: Array, required: true, default: [] },
    roles: { type: Array, required: true, default: [] },
    bio: { type: String, required: false },
    profilePicture: { type: String, required: false, default: 'placeholder' },
    banner: { type: String, required: false, default: 'placeholder' }
  },
  {
    timestamps: true
  }
)

module.exports = User
