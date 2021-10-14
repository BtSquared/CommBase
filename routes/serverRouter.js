const { Router } = require('express')
const serverController = require('../controllers/serverController')
const router = Router()

router.get('/findserver', serverController.getServerById)
router.post('/createserver', serverController.createServer)

module.exports = router
