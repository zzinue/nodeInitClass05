const User = require('../../models/users').model;
const getAll = async() => {
    const allUsers = await User.find({}).exec();
    return allUsers;
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
module.exports = {
    getAll,
    create,
}