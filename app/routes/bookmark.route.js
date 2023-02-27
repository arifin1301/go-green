const bookmarkController = require('../controllers/bookmark.controller')
// const {verifyToken} = require('../middlewares/auth.jwt')
// const {haveTask} = require('../middlewares/authoriztion')
require('dotenv').config()

module.exports = (express, app, default_router) => {
    const router = express.Router()

    router.post('/bookmark', bookmarkController.createBookmark)
    router.post('/bookmark/:id', bookmarkController.deleteBookmark)
    router.get('/bookmark', bookmarkController.getAllBookmark)

    app.use(default_router, router)
}