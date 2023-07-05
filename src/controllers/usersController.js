const UserModel = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find().select('username _id')
        res.status(200).json({ users })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json({ username: user.username, _id: user._id })
    } catch (error) {  
        console.log(error)
        res.status(500).json({ error })
    }
}

module.exports = {
    getAllUsers,
    createUser,
}