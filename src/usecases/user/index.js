const User = require('../../models/users').model;
const getAll = async() => {
    return await User.find({}).exec();
}
const getById = async(id) => {
    return await User.findById(id).exec()
}
const create = async(userData) => {
    const { name, age, email, career } = userData;
    const newUser = new User({
        name,
        age,
        email,
        career
    })
    const savedUser = await newUser.save();
    return savedUser;
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
    del
}