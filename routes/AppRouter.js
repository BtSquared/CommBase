const { Router } = require('express')
const user = require('./userRouter')
const AppRouter = Router()

AppRouter.use('/user', user)

module.exports = AppRouter
