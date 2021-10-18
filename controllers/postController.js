const { Server } = require('../models')
const Post = require('../')

const createPost = async (req, res) => {
  try {
    const server = await Server.findById(req.body.serverId)
    const channel = await server.channels.id(req.body.channelId)
    channel.posts.push({ userId: req.body.userId, content: req.body.content })
    server.save()
    res.send(channel)
  } catch (err) {
    throw err
  }
}

const editPost = async (req, res) => {
  try {
    const server = await Server.findById(req.body.serverId)
    const channel = await server.channels.id(req.body.channelId)
    const post = await channel.posts.id(req.body.postId)
    post.content = req.body.content
    server.save()
    res.send(post)
  } catch (err) {
    throw err
  }
}

const deletePost = async (req, res) => {
  try {
    const server = await Server.findById(req.body.serverId)
    const channel = await server.channels.id(req.body.channelId)
    await channel.posts.id(req.body.postId).remove()
    server.save()
    res.send(`Post with the id of ${req.body.postId} has been deleted`)
  } catch (err) {
    throw err
  }
}

module.exports = {
  createPost,
  editPost,
  deletePost
}
