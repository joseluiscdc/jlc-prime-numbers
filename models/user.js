const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    role: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    lastLogin: { type: Date, required: true, default: Date.now },
})

UserSchema.plugin(uniqueValidator)

const user = mongoose.model('User', UserSchema)

module.exports = user
