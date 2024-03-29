const { user } = require('../../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8)
        const data = await user.create(req.body)
        return res.status(201).json({
            msg: "success sign up",
            data: {
                id: data.id,
                name: data.name,
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const signIn = async (req, res) => {
    try {
        user.findOne({
            where: { email: req.body.email }
        })
            .then(user => {
                if (user) {
                    let checkPassword = bcrypt.compareSync(req.body.password, user.password)

                    if (!checkPassword) {
                        return res.status(401).json({
                            msg: "invalid password"
                        })
                    }

                    // create token jwt

                    let key = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
                        expiresIn: 86400 // 24 hours
                    })

                    return res.status(200).json({
                        msg: "success sign in",
                        key
                    })
                }
                return res.status(404).json({
                    msg: "user not found"
                })
            })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const getAllUser = async (req, res) => {
    try {
        const data = await User.findAll({
            include: [
                {
                    model: Task
                }
            ]
        })
        return res.status(200).json({
            msg: "Success retrieve data users",
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const getDetailUser = async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findOne({
            where: { id },
            include: [
                {
                    model: Task
                }
            ]
        })
        return res.status(200).json({
            msg: "Success retrieve detail user",
            data
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.update(req.body, {
            where: { id }
        })
        return res.status(200).json({
            msg: "Success update detail user."
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

const addPoint = async (req, res) => {
    const { point } = req.params
    try {
        const data = await user.update({ point: point }, {
            where: {
                //tinggal id user
            }
        })
        if (!data) {
            return res.status(400).json({
                msg: 'data tidak tersedia'
            })
        }
        res.status(200).json({
            msg: 'point berhasil di tambahkan'
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    signUp,
    signIn,
    getAllUser,
    getDetailUser,
    updateUser,
}