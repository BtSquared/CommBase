const { Server, User } = require('../models')

const getServerById = async (req, res) => {
  const server = await Server.findById(req.query.serverId)
  res.send(server)
}

const createServer = async (req, res) => {
  const server = await new Server({
    owner: req.body.userId,
    channels: [{ name: 'general' }]
  })
  server.save()
  res.send(server)
}

const joinServer = async (req, res) => {
  const server = Server.find({ inviteCode: req.params.inviteCode })
  const user = User.findById(req.body.userId)
  server.whiteList.push(user._id)
  user.servers.push(server._id)
  server.save()
  user.save()
  res.send(`${user.displayName} has joined ${server.serverName}`)
}

const updateServer = async (req, res) => {}

module.exports = {
  getServerById,
  createServer,
  joinServer
}
