const { Router } = require('express')
const channelController = require('../controllers/channelController')
const router = Router()

router.post('/createchannel', channelController.createChannel)

module.exports = router
