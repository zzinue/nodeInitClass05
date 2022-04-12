const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    age: Number,
    email: String,
    career: String
})
module.exports = {
    schema,
    model: mongoose.model('User', schema),
}