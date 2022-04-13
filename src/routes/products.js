const express = require('express');
const product = require("../usecases/product");
// create an instance of express
const router = express.Router();
router.get("/", async(req, res, next) => {
    try {
        const products = await product.getAll()
        res.json({
            success: true,
            payload: products
        })
    } catch (error) {
        next(error)
    }

})
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const payload = await product.getById(id);
    res.json({ success: true, payload });
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
router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, price, image } = req.body;
        const productUpdated = await product.update(id, { name, description, price, image });
        res.json({
            success: true,
            message: `product ${id} updated`,
            payload: productUpdated
        });
    } catch (error) {
        next(error)
    }
})
router.patch("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const productUpdated = await product.patch(id, {...req.body });
        res.json({
            success: true,
            message: `product ${id} updated`,
            payload: productUpdated
        })
    } catch (error) {
        next(error)
    }
})
router.delete("/:id", async(req, res, next) => {
        try {
            const { id } = req.params;
            const productDeleted = await product.del(id);
            res.json({
                success: true,
                message: `product ${id} deleted`,
                payload: productDeleted
            })
        } catch (error) {
            next(error)
        }
    })
    //export as module
module.exports = router;