const express = require('express');
const category = require('../usecases/category');
// create an instance of express
const router = express.Router();
router.get("/", async(req, res) => {
    const categories = await category.getAll();
    res.json({
        success: true,
        payload: categories
    });
})
router.post("/", async(req, res) => {
    const { name, description, price, image } = req.body;
    const categoryCreated = await category.create({ name, description, price, image });
    res.json({
        success: true,
        message: "category created",
        payload: categoryCreated
    });
})
router.get("/:id", (req, res) => {
    const { header1 } = req.headers;
    const id = req.params.id;
    console.log(id);
    res.json({ message: `category: ${id}`, header1 });
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, type } = req.body;
    res.json({ message: `categoriy ${id} updated`, payload: { name, type } });
})
router.delete("/:id", (req, res) => {
        const { id } = req.params;
        res.json({ message: `category ${id} deleted` });
    })
    //export as module
module.exports = router;