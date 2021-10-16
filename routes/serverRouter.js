const { Router } = require('express')
const serverController = require('../controllers/serverController')
const router = Router()

router.get('/getAllServers', serverController.getAllServers)
router.get('/findserver', serverController.getServerById)
router.post('/invite/:inviteCode', serverController.joinServer)
router.post('/createserver', serverController.createServer)
router.delete('/deleteserver', serverController.deleteServer)

module.exports = router
