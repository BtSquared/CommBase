const { Router } = require('express')
const user = require('./userRouter')
const server = require('./serverRouter')
const post = require('./postRouter')
const AppRouter = Router()

AppRouter.use('/user', user)
AppRouter.use('/server', server)
AppRouter.use('/post', post)

module.exports = AppRouter
