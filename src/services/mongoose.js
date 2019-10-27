require("dotenv").config()

const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

    const db = mongoose.connection;

    db.on("error", (error) => console.log("Error", error));

    db.on("open", () => console.log("Connected to Database"));

};