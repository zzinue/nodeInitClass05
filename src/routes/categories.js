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
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const payload = await category.getById(id);
    res.json({ succes: true, payload });
})
router.post("/", async(req, res) => {
    const { name, location, utilities, image } = req.body;
    const categoryCreated = await category.create({ name, location, utilities, image });
    res.json({
        success: true,
        message: "category created",
        payload: categoryCreated
    });
})

router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name, location, utilities, image } = req.body;
        const categoryUpdated = await category.update(id, { name, location, utilities, image });
        res.json({ success: true, message: `categoriy ${id} updated`, payload: categoryUpdated });
    } catch (error) {
        next(error)
    }
})
router.patch("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const categoryUpdated = await category.patch(id, {...req.body })
        res.json({
            success: true,
            message: `category ${id} updated Patch`,
            payload: categoryUpdated
        })
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async(req, res, next) => {
        try {
            const { id } = req.params;
            const categoryDeleted = await category.del(id);
            res.json({
                sucees: true,
                message: `category ${id} deleted`,
                payload: categoryDeleted
            });
        } catch (error) {
            next(error)
        }
    })
    //export as module
module.exports = router;