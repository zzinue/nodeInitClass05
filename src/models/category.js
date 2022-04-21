const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: { type: String, required: true, unique: true },
})
module.exports = {
    schema,
    model: mongoose.model('Category', schema),
}