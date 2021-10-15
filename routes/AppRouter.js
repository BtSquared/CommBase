const { Router } = require('express')
const auth = require('./authRouter')
const user = require('./userRouter')
const server = require('./serverRouter')
const channel = require('./channelRouter')
const post = require('./postRouter')

const AppRouter = Router()

AppRouter.use('/auth', auth)
AppRouter.use('/user', user)
AppRouter.use('/server', server)
AppRouter.use('/channel', channel)
AppRouter.use('/post', post)

module.exports = AppRouter
