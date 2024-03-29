const wasteContoller = require('../controllers/waste.controller')


module.exports = (express, app, default_router) => {
    const router = express.Router()

    router.post('/waste/recycle', wasteContoller.createWasteRecyle)
    router.post('/waste/trash', wasteContoller.createWasteTrash)
    router.post('/waste/analyze', wasteContoller.analyzeWaste)

    
    app.use(default_router, router)
}