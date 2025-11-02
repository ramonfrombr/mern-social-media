const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (request, response) => {
    try {
        // Generate hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(request.body.password, salt);

        // Create user
        const newUser = new User({
            username: request.body.username,
            email: request.body.email,
            password: hashedPassword
        });

        // Save user and respond
        const user = await newUser.save();
        response.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;