const { Router } = require('express')
const postController = require('../controllers/postController')
const router = Router()

router.post('/createpost', postController.createPost)
router.put('/edit', postController.editPost)
router.delete('/remove', postController.deletePost)

module.exports = router
