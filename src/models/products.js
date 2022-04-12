const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    description: String,
    price: Number,
    image: String
})
module.exports = {
    schema,
    model: mongoose.model('Product', schema),
}