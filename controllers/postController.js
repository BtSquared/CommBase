const { Server } = require('../models')
const Post = require('../')

const createPost = async (req, res) => {
  const server = await Server.findById(req.body.serverId)
  const channel = await server.channels.id(req.body.channelId)
  channel.posts.push({ userId: req.body.userId, content: req.body.content })
  server.save()
  res.send(channel)
}

const editPost = async (req, res) => {
  const server = await Server.findById(req.body.serverId)
  const channel = await server.channels.id(req.body.channelId)
  const post = await channel.posts.id(req.body.postId)
  post.content = req.body.content
  server.save()
  res.send(post)
}

const deletePost = async (req, res) => {
  const server = await Server.findById(req.body.serverId)
  const channel = await server.channels.id(req.body.channelId)
  await channel.posts.id(req.body.postId).remove()
  server.save()
  res.send(`Post with the id of ${req.body.postId} has been deleted`)
}

module.exports = {
  createPost,
  editPost,
  deletePost
}
