const { User } = require('../models')
const path = require('path')
const uploader = require('../middleware/uploader')

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.send(users)
}

const getUserById = async (req, res) => {
  const user = await User.findById(req.body.userId)
  res.send(user)
}

const removeUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.body.userId)
  res.send(`user with the ID of ${req.body.userId} deleted`)
}

const uploadAvatar = async (req, res) => {
  try {
    console.log(req.file, req.body)
    let file = req.file
    const fileName = `${req.body.userId}/avatar${path.extname(
      file.originalname
    )}`
    let fileParams = {
      Key: fileName,
      Body: file.buffer,
      ACL: 'public-read',
      Bucket: 'commbase-avatars',
      ContentEncoding: file.encoding,
      ContentLength: file.size,
      ContentType: file.mimetype
    }
    await uploader.upload(fileParams)
    const user = await User.find(req.body.userId)
    user.profilePicture = `https://d34y6rgwiibafg.cloudfront.net/${fileName}`
    user.save()
    res.send(user)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  removeUser,
  uploadAvatar
}
