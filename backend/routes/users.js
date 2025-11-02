const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// update user
router.put("/:id", async (request, response) => {
    if (request.body.userId === request.params.id || request.body.isAdmin) {
        if (request.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                request.body.password = await bcrypt.hash(
                    request.body.password,
                    salt
                );
            } catch (error) {
                return response.status(500).json(error);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(request.params.id, {
                $set: request.body,
            });
            response.status(200).json("Account has been updated.");
        } catch (error) {
            response.status(500).json(error);
        }
    } else {
        return response.status(403).json("You can only update your account.");
    }
});

// delete user
router.delete("/:id", async (request, response) => {
    if (request.body.userId === request.params.id || request.body.isAdmin) {
        try {
            await User.findByIdAndDelete(request.params.id);
            return response
                .status(200)
                .json("Account has been deleted successfully.");
        } catch (error) {
            return response.status(500).json(error);
        }
    } else {
        return response.status(403).json("You can delete only your account.");
    }
});

// get user
// follow a user
// unfollow a user

module.exports = router;
