const express = require('express');
// createa an instance of express
const router = express.Router();
router.get("/", (req, res) => {
    res.json({ message: "all users" });
})
router.get("/:id", (req, res) => {
    const { header1 } = req.headers;
    const id = req.params.id;
    console.log(id);
    res.json({ message: `user ${id}`, header1 });
})
router.post("/", (req, res) => {
    const { name, age } = req.body;
    res.json({
        message: "user created",
        payload: { name, age }
    });
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