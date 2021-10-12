const { Server } = require('../models')

const createChannel = async (req, res) => {
  const server = await Server.findById({ _id: req.body.serverId })
  server.channels.push({ name: req.body.name })
  server.save()
  res.send(server)
}

module.exports = {
  createChannel
}
