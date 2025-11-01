const router = require("express").Router();

router.get("/", (request, response) => {
    response.send("This is the users route.");
});

module.exports = router;