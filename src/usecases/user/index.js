const User = require('../../models/users').model;
const { hash } = require('bcrypt');
const encrypt = require('../../lib/encrypt');

const getAll = async() => {
    return await User.find({}).exec();
}
const getById = async(id) => {
    return await User.findById(id).exec()
}
const getByEmail = async(email) => {
    return await User.findOne({ email }).exec()
}
const authenticate = async(user, password) => {
    const hash = user.password
    return await encrypt.veryfyPassword(password, hash)
}
const create = async(firstName, lastName, email, password) => {
    const hash = await encrypt.hashPassword(password);
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hash
    })
    return await newUser.save();
}
const update = async(id, userData) => {
    const { name, age, email, career } = userData
    const updatedUser = await User.findByIdAndUpdate(id, { name, age, email, career }, { new: true }).exec()
    return updatedUser
}
const patch = async(id, userData) => {
    return await User.findByIdAndUpdate(id, {...userData }, { new: true }).exec()
}
const del = async(id) => {
    return await User.findByIdAndDelete(id).exec()
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    patch,
    del,
    getByEmail,
    authenticate
}