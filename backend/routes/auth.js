const router = require("express").Router();

router.get("/", (request, response) => {
    response.send("This is the auth route.");
});

module.exports = router;