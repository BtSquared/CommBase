const { Server } = require('../models')

const createChannel = async (req, res) => {
  const server = await Server.findById(req.body.serverId)
  server.channels.push({ name: req.body.name })
  server.save()
  res.send(server)
}

const deleteChannel = async (req, res) => {
  const server = await Server.findById(req.body.serverId)
  await server.channels.id(req.body.channelId).remove()
  server.save()
}

module.exports = {
  createChannel
}
