const { Server, User } = require('../models')
const middleware = require('../middleware/auth')
const { ObjectId } = require('bson')

const getAllServers = async (req, res) => {
  const servers = await Server.find({})
  res.send(servers)
}

const getServerById = async (req, res) => {
  const server = await Server.findById(req.query.serverId)
  res.send(server)
}

const getServerUsers = async (req, res) => {
  let usersList = req.body.userList.map((user) => {
    return ObjectId(user)
  })
  const users = await User.find({ _id: { $in: usersList } })
  let list = []
  for (let i = 0; i < users.length; i++) {
    let userInfo = {
      _id: users[i].id,
      displayName: users[i].displayName,
      profilePicture: users[i].profilePicture
    }
    list.push(userInfo)
  }
  res.send(list)
}

const createServer = async (req, res) => {
  const makeCode = () => {
    let code = ''
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
    for (let i = 0; i < 10; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return code
  }
  const server = await new Server({
    owner: req.body.userId,
    serverName: req.body.serverName,
    inviteCode: makeCode(),
    channels: [{ name: 'general' }]
  })
  server.whiteList.push(req.body.userId)
  server.save()
  const user = await User.findById(req.body.userId)
  user.servers.push(server._id)
  user.save()
  res.send(server)
}

const joinServer = async (req, res) => {
  const server = await Server.findOne(req.params)
  const user = await User.findById(req.body.userId)
  server.whiteList.push(user._id)
  user.servers.push(server._id)
  server.save()
  user.save()
  let payload = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    servers: user.servers,
    roles: user.roles,
    bio: user.bio,
    profilePicture: user.profilePicture,
    banner: user.banner
  }
  let token = middleware.createToken(payload)
  res.send({ user: payload, token })
}

const updateServer = async (req, res) => {}

const deleteServer = async (req, res) => {
  await Server.findByIdAndDelete(req.body.serverId)
  const users = await User.find({ $in: req.body.serverId })
  for (let i = 0; i < users.length; i++) {
    let user = await User.findById(users[i]._id)
    let index = user.servers.indexOf(req.body.serverId)
    if (index === -1) {
    } else {
      user.servers.splice(index, 1)
      user.save()
    }
  }
  res.send(`server with the ID of ${req.body.serverId} deleted`)
}

module.exports = {
  getAllServers,
  getServerById,
  getServerUsers,
  createServer,
  joinServer,
  deleteServer
}
