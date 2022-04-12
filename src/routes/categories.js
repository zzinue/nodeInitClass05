const express = require('express');
// create an instance of express
const router = express.Router();
router.get("/", (req, res) => {
    res.json({ message: "all categories" });
})
router.get("/:id", (req, res) => {
    const { header1 } = req.headers;
    const id = req.params.id;
    console.log(id);
    res.json({ message: `category: ${id}`, header1 });
})
router.post("/", (req, res) => {
    const { name, type } = req.body;
    res.json({
        message: "category created",
        payload: { name, type }
    });
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