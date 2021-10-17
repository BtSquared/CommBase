const { Router } = require('express')
const serverController = require('../controllers/serverController')
const multer = require('multer')

const storage = multer.memoryStorage()

const upload = multer({ storage })

const router = Router()

router.get('/getallservers', serverController.getAllServers)
router.get('/findserver', serverController.getServerById)
router.post('/getserverusers', serverController.getServerUsers)
router.post('/invite/:inviteCode', serverController.joinServer)
router.post('/createserver', serverController.createServer)
router.put(
  '/updateicon',
  upload.single('serverIcon'),
  serverController.updateServerIcon
)
router.delete('/deleteserver', serverController.deleteServer)

module.exports = router
