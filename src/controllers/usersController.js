const UserModel = require('../models/user');

const getAllUsers = (req, res) => {
    res.send('Get all users')
}

const createUser = (req, res) => {
    res.send('Create user')
}

module.exports = {
    getAllUsers,
    createUser,
}