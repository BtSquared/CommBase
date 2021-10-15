const { Server } = require('../models')

const getChannelById = async (req, res) => {
  const server = await Server.findById(req.body.serverId)
  const channel = await server.channels.id(req.body.channelId)
  res.send(channel)
}

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
  res.send(`channel with the id of ${req.body.channelId} has been deleted`)
}

module.exports = {
  createChannel,
  deleteChannel
}
