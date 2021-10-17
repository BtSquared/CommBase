const { Router } = require('express')
const userController = require('../controllers/userController')
const multer = require('multer')

const storage = multer.memoryStorage()

const upload = multer({ storage })

const router = Router()

router.get('/getallusers', userController.getAllUsers)
router.get('/finduser', userController.getUserById)
router.post('/avatar', upload.single('avatar'), userController.uploadAvatar)
router.delete('/delete', userController.removeUser)

module.exports = router
