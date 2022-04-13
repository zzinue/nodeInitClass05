const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    location: String,
    utilities: String,
    image: String
})
module.exports = {
    schema,
    model: mongoose.model('Category', schema),
}