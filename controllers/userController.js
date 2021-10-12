const { User } = require('../models')

const getUserById = async (req, res) => {
  const user = await User.find({ _id: req.body.userId })
  res.send(user)
}

const createUser = async (req, res) => {
  const user = await new User({ ...req.body })
  await user.save()
  res.send({ user })
}

const removeUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.body.userId })
  res.send(`user with the ID of ${req.body.userId} deleted`)
}

module.exports = {
  getUserById,
  createUser,
  removeUser
}
