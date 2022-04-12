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
router.post("/", async(req, res) => {
    const { name, age, email, career } = req.body;
    const userCreated = await user.create({ name, age, email, career });
    res.json({
        succes: true,
        message: "user created",
        payload: userCreated
    });
})
router.get("/:id", (req, res) => {
    const { header1 } = req.headers;
    const id = req.params.id;
    console.log(id);
    res.json({ message: `user ${id}`, header1 });
})
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    res.json({ message: `user ${id} updated`, payload: { name, age } });
})
router.delete("/:id", (req, res) => {
        const { id } = req.params;
        res.json({ message: `user ${id} deleted` });
    })
    //export as module
module.exports = router;