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
  res.send(server)
}

module.exports = {
  getServerById,
  createServer
}
