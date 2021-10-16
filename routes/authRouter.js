const { Router } = require('express')
const authController = require('../controllers/authController')
const middleware = require('../middleware/auth')
const router = Router()

router.get(
  '/checksession',
  middleware.stripToken,
  middleware.verifyToken,
  authController.CheckSession
)
router.post('/login', authController.Login)
router.post('/register', authController.Register)
router.put('/changepassword', authController.UpdatePassword)

module.exports = router
