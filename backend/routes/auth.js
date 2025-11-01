const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.get("/register", async (request, response) => {
    const user = await new User({
        username: "john",
        email: "john@gmail.com",
        password: "123456",
    });

    await user.save();
    response.send("ok");
});

module.exports = router;