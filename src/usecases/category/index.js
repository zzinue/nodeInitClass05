const Category = require('../../models/categories').model;

const getAll = async() => {
    return await Category.find({}).exec();

}
const getById = async(id) => {
    return await Category.findById(id).exec();
}
const create = async(categoryData) => {
    const { name, location, utilities, image } = categoryData;
    const newCategory = new Category({
        name,
        location,
        utilities,
        image
    })
    const savedCategory = await newCategory.save();
    return savedCategory;
}
const update = async(id, categoryData) => {
    const { name, utilities, location, image } = categoryData;
    const updatedCategory = await Category.findByIdAndUpdate(id, { name, utilities, location, image }, { new: true }).exec();
    return updatedCategory;
}
const patch = async(id, categoryData) => {
    return await Category.findByIdAndUpdate(id, {...categoryData }, { new: true }).exec()
}
const del = async(id) => {
    return await Category.findByIdAndDelete(id).exec()
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    patch,
    del
}