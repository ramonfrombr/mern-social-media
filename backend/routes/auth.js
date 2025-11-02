const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (request, response) => {
    const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    });

    try {
        const user = await newUser.save();
        response.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;