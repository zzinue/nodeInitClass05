const express = require('express');
const category = require('../usecases/category');
// create an instance of express
const router = express.Router();
router.get("/", async(req, res, next) => {
    try {
        const categories = await category.getAll();
        res.json({
            success: true,
            message: "Categories retrieved successfully",
            payload: categories
        });
    } catch (error) {
        next(error);
    }
})
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const retrievedCategory = await category.getById(id);
        res.json({ succes: true, payload: retrievedCategory });
    } catch (error) {
        next(error);
    }
})
router.post("/", async(req, res, next) => {
    try {
        const { name } = req.body;
        const createdCategory = await category.create(name);
        res.json({
            success: true,
            message: "category created",
            payload: createdCategory
        })
    } catch (error) {
        next(error)
    }
})

router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const categoryUpdated = await category.update(id, name);
        res.json({
            success: true,
            message: `category updated`,
            payload: categoryUpdated
        });
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