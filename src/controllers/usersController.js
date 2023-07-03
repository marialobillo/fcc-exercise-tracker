const UserModel = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).select('username _id')
        res.status(200).json({ users })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

const createUser = (req, res) => {
    res.send('Create user')
}

module.exports = {
    getAllUsers,
    createUser,
}