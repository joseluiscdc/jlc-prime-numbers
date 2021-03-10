const Debug = require('debug')
const User = require('../models/user')
const debug = new Debug('jlc-prime-numbers:store-user*')

async function create(usr) {
    debug(`Creating a new user ${usr.email}`)
    const user = new User(usr)
    return await user.save()
}

async function findAll(sort = '-createdAt') {
    debug('Get all users...')
    return User.find().sort(sort)
}

async function findOne(email) {
    debug(`Get user ${email}`)
    return User.findOne({ email })
}

async function updatePwd(userId, password) {
    debug(`Update user ${userId}`)
    return User.updateOne({ password })
}

async function updateLogin(userId) {
    debug(`Update user last login ${userId}`)
    return User.updateOne({ lastLogin: new Date() })
}

async function deleteUser(userId) {
    debug(`Deleting user ${userId}`)
    return User.deleteOne({ _id: userId })
}

module.exports = {
	create,
	findAll,
	findOne,
    updatePwd,
    updateLogin,
    deleteUser,
}