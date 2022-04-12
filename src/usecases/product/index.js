const Product = require("../../models/products").model
const getAll = async() => {
    //retrieve all products
    const allProducts = await Product.find({}).exec()
    return allProducts;

}
const getByID = async(id) => {
    //Retrieve one product by id
}
const create = async(productData) => {
    const { name, price, description, image } = productData;
    const newProduct = new Product({
        name,
        price,
        description,
        image
    })
    const savedProduct = await newProduct.save()
    return savedProduct

}
const update = async(id, productData) => {
    const { name, price, description, image } = productData;
    //Update a product 
    return 'product updated';
}
const del = async(id) => {
    //Delete a product
    return 'product deleted';
}

module.exports = {
    getAll,
    create,
    getByID,
    update,
    del,
}