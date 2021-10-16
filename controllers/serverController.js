const { Server, User } = require('../models')
const middleware = require('../middleware/auth')

const getAllServers = async (req, res) => {
  const servers = await Server.find({})
  res.send(servers)
}

const getServerById = async (req, res) => {
  const server = await Server.findById(req.query.serverId)
  res.send(server)
}

const createServer = async (req, res) => {
  const server = await new Server({
    owner: req.body.userId,
    serverName: req.body.serverName,
    channels: [{ name: 'general' }]
  })
  server.save()
  res.send(server)
}

const joinServer = async (req, res) => {
  console.log(req)
  const server = await Server.findOne(req.params)
  const user = await User.findById(req.body.userId)
  console.log(server)
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
  res.send(`server with the ID of ${req.body.serverId} deleted`)
}

module.exports = {
  getAllServers,
  getServerById,
  createServer,
  joinServer,
  deleteServer
}
