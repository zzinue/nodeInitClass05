const Category = require('../../models/category').model
const getAll = async() => {
    return await Category.find({}).exec();
}
const getById = async(id) => {
    return await Category.findById(id).exec();
}
const create = async(name) => {
    const category = new Category({ name })
    return category.save()
}
const update = async(id, name) => {
    const updatedCategory = await Category.findByIdAndUpdate(id).exec();
    updatedCategory.name = name;
    return await updatedCategory.save()
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