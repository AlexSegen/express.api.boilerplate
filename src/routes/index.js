"use strict";
const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "OK"
    })
});

const authRouter = require("./auth");
router.use("/auth", authRouter);

const subscribersRouter = require("./subscribers");
router.use("/subscribers", subscribersRouter);

module.exports = router;