const Category = require('../../models/categories').model;

const getAll = async() => {
    const allCategories = await Category.find({}).exec();
    return allCategories;
}
const create = async(categoryData) => {
    const { name, description, price, image } = categoryData;
    const newCategory = new Category({
        name,
        description,
        price,
        image
    })
    const savedCategory = await newCategory.save();
    return savedCategory;

}
module.exports = {
    getAll,
    create,
}