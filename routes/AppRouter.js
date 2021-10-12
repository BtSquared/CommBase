const { Router } = require('express')
const user = require('./userRouter')
const server = require('./serverRouter')
const AppRouter = Router()

AppRouter.use('/user', user)
AppRouter.use('/server', server)

module.exports = AppRouter
