const { waste } = require('../../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createWasteRecyle = async (req, res) => {
    try {
        req.body['status'] = "recycle"
        req.body['type'] = 2 // maksudnya multiple
        const data = await waste.create(req.body)
        return res.status(201).json({
            msg: 'succes create waste recycle',
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}
const createWasteTrash = async (req, res) => {
    try {
        req.body['status'] = "trash"
        req.body['type'] = 2 // maksudnya multiple
        const data = await waste.create(req.body)
        return res.status(201).json({
            msg: 'succes create waste trash',
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}
const analyzeWaste = async (req, res) => {
    try {
        return res.status(201).json({
            msg: 'succes create waste trash',
            data: {
                organic: 80,
                non_organic: 20,
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}


module.exports = { createWasteRecyle, createWasteTrash, analyzeWaste }
