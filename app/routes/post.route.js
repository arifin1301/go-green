const PostController = require('../controllers/post.controller')
// const {verifyToken} = require('../middlewares/auth.jwt')
// const {haveTask} = require('../middlewares/authoriztion')
require('dotenv').config()

module.exports = (express, app, default_router) => {
    const router = express.Router()

    router.get('/tasks', PostController.getAllPost)
    router.post('/tasks', PostController.createPost)
    router.put('/tasks/:id', PostController.updatePost)
    router.delete('/tasks/:id', PostController.deletePost)

    app.use(default_router, router)
}