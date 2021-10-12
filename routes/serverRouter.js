const { Router } = require('express')
const serverController = require('../controllers/serverController')
const router = Router()

router.get('/findserver', serverController.getServerById)
router.post('/createserver', serverController.createServer)
router.post('/createchannel', serverController.createChannel)

module.exports = router