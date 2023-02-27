const { post, user } = require('../../models')

//ambil semua data post
const getAllPost = async (req, res) => {
    try {
        const data = await post.findAll()
        return res.status(200).json({
            msg: 'Succes retrive the post',
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const getDetailPost = async (req, res) => {
    const { id } = req.params
    const data = await post.findOne({ where: { id: id } })
    if (data === null) {
        return res.status(400).json({
            msg: 'postingan tidak tersedia'
        })
    }

    res.status(200).json({
        msg: "data berhasil ditemukan",
        data
    })
}

//menambahkan post
const createPost = async (req, res) => {
    try {
        const data = await post.create(req.body)
        return res.status(201).json({
            msg: "Successfully create new post",
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

//update 
const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        await post.update(req.body, {
            where: { id }
        })
        return res.status(201).json({
            msg: "Success updated post"
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

//delete
const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const data = await post.destroy({
            where: { id }
        })

        if (data) {
            return res.status(200).json({
                msg: "Successfully delete post"
            })
        }

        return res.status(404).json({
            msg: "post not found"
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    getAllPost,
    createPost,
    updatePost,
    deletePost,
    getDetailPost
}