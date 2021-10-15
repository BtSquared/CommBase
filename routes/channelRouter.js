const { Router } = require('express')
const channelController = require('../controllers/channelController')
const router = Router()

router.get('/findchannel', channelController.getChannelById)
router.post('/create', channelController.createChannel)
router.delete('/delete', channelController.deleteChannel)

module.exports = router
