const express = require("express");
const app = express();
app.use(express.json())

const db = require("./src/services/mongoose");

db();

const subscribersRouter = require("./src/routes/subscribers");

app.use("/subscribers", subscribersRouter)

app.listen(3000, () => console.log("Server has started"));