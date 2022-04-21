const express = require('express');
const user = require('../usecases/user');
const jwt = require('../lib/jwt');
const router = express.Router();

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        const retrievedUser = await user.getByEmail(email);
        const isMatch = await user.authenticate(retrievedUser, password);
        if (isMatch) {
            const token = await jwt.sign({
                sub: retrievedUser._id,
                name: 'User name: '
            })
            res.json({
                success: true,
                payload: token,
            })
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid password'
            })
        }
    } catch (error) {
        next(error);
    }
})
module.exports = router;