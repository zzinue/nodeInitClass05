const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    description: { type: String, required: false },
    stars: { type: Number, required: true },
    user: { type: mongoose.ObjectId, required: true },
})
const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    review: {
        type: Object

    }
});
module.exports = {
    schema,
    model: mongoose.model('Product', schema),
}