const express = require('express');
const product = require("../usecases/product");
// create an instance of express
const router = express.Router();
router.get("/", async(req, res) => {
    const products = await product.getAll()
    res.json({
        success: true,
        payload: products
    })
})
router.post("/", async(req, res) => {
    const { name, description, price, image } = req.body;
    const productCreated = await product.create({ name, description, price, image });
    res.json({
        success: true,
        message: "product created",
        payload: productCreated
    });
})
router.get("/:id", (req, res) => {
    const { header1 } = req.headers;
    const id = req.params.id;
    console.log(id);
    res.json({ message: `product ${id}`, header1 });
})
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    res.json({ message: `product ${id} updated`, payload: { name, price } });
})
router.delete("/:id", (req, res) => {
        const { id } = req.params;
        res.json({ message: `product ${id} deleted` });
    })
    //export as module
module.exports = router;