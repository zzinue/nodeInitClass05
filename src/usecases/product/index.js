const Product = require("../../models/products").model
const User = require('../../models/users').model

const getAll = async() => {
    return await Product.find({}).exec()
}
const getById = async(id) => {
    const product = await Product.findById(id).exec()
    const review = {...product.review, user: `http://localhost:3000/users/${product.review.user}` }
    product.review = review
    return { product }
    //Retrieve one product by id
}
const create = async(productData) => {
    const { name, price, description, image, review } = productData;
    const user = await User.findById(review.user).exec()
    const reviewToSend = {...review, user: user._id }

    const newProduct = new Product({
        name,
        price,
        description,
        image,
        review: reviewToSend
    })
    const savedProduct = await newProduct.save()
    return savedProduct
}

const update = async(id, productData) => {
    const { name, description, price, image } = productData;
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price, image }, { new: true }).exec()
    return updatedProduct;
}
const patch = async(id, productData) => {
    return await Product.findByIdAndUpdate(id, {...productData }, { new: true }).exec()
}

const del = async(id) => {
    return await Product.findByIdAndDelete(id).exec()
}
module.exports = {
    getAll,
    create,
    getById,
    update,
    patch,
    del,
}