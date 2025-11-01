const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error trying to connect:", error));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (request, response) => {
    response.send("Welcome to my website");
});

app.get("/users", (request, response) => {
    response.send("Welcome to my website users page");
});


app.listen(8800, () => {
    console.log("Backend server is running!!!");
});
