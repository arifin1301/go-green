const PostController = require('../controllers/post.controller')
// const {verifyToken} = require('../middlewares/auth.jwt')
// const {haveTask} = require('../middlewares/authoriztion')
require('dotenv').config()

module.exports = (express, app, default_router) => {
    const router = express.Router()

    router.get('/posts', PostController.getAllPost)
    router.get('/posts/:id', PostController.getDetailPost)
    router.post('/posts', PostController.createPost)
    router.put('/posts/:id', PostController.updatePost)
    router.delete('/posts/:id', PostController.deletePost)

    app.use(default_router, router)
}