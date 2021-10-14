const { Server } = require('../models')

const getServerById = async (req, res) => {
  const server = await Server.find(req.body.serverId)
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

const updateServer = async (req, res) => {}

module.exports = {
  getServerById,
  createServer
}
