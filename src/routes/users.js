const express = require('express');
const user = require('../usecases/user');
// createa an instance of express
const router = express.Router();
router.get("/", async(req, res) => {
    const users = await user.getAll();
    res.json({
        success: true,
        payload: users
    });
})
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const payload = await user.getById(id)
    res.json({ succes: true, message: payload });
})
router.post("/", async(req, res) => {
    const { name, age, email, career } = req.body;
    const userCreated = await user.create({ name, age, email, career });
    res.json({
        succes: true,
        message: "user created",
        payload: userCreated
    });
})
router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name, age, email, career } = req.body;
        const userUpdated = await user.update(id, { name, age, email, career })
        res.json({
            succes: true,
            message: `user ${id} updated`,
            payload: userUpdated
        });
    } catch (error) {
        next(error)
    }
})
router.patch("/:id", async(req, res, next) => {
    try {
        const { id } = req.params
        const userUpdated = await user.patch(id, {...req.body })
        res.json({
            succes: true,
            message: `User ${id} updated Patch`,
            payload: userUpdated
        })
    } catch (error) {
        next(error)
    }
})
router.delete("/:id", async(req, res, next) => {
        try {
            const { id } = req.params;
            const userDeleted = await user.del(id)
            res.json({
                succes: true,
                message: `User ${id} deleted`,
                payload: userDeleted
            });
        } catch (error) {
            next(error)
        }
    })
    //export as module
module.exports = router;