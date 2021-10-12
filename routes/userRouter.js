const { Router } = require('express')
const userController = require('../controllers/userController')
const router = Router()

router.get('/finduser', userController.getUserById)
router.post('/register', userController.createUser)
router.delete('/delete', userController.removeUser)

module.exports = router
