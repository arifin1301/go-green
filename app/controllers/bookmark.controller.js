const { bookmark, post } = require('../../models')

const createBookmark = async (req, res) => {
    try {
        const data = await bookmark.create(req.body)
        res.status(201).json({
            msg: "berhasil menambahkan ke bookmark",
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }

}

const deleteBookmark = async (req, res) => {
    const { id } = req.params
    try {
        const data = await bookmark.destroy({ where: { id: id } })

        if (data) {
            return res.status(200).json({
                msg: 'berhasil hapus bookmark'
            })
        }

        res.status(400).json({
            msg: "bookmark not found"
        })


    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const getAllBookmark = async (req, res) => {
    try {
        const data = await bookmark.findAll({
            include: [
                post
            ]
        })
        res.status(200).json({
            msg: 'succes retrive all bookmark',
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = { createBookmark, deleteBookmark, getAllBookmark }

