const { Router } = require('express')
const channelController = require('../controllers/channelController')
const router = Router()

router.post('/create', channelController.createChannel)
router.delete('/delete', channelController.deleteChannel)

module.exports = router
