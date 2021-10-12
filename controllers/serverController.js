const { Server } = require('../models')

const getServerById = async (req, res) => {
  const server = await Server.find({ _id: req.body.serverId })
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

const createChannel = async (req, res) => {
  const server = await Server.findById({ _id: req.body.serverId })
  server.channels.push({ name: req.body.name })
  server.save()
  res.send(server)
}

module.exports = {
  getServerById,
  createServer,
  createChannel
}
