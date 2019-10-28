"use strict";
const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
router.use("/auth", authRouter);

const subscribersRouter = require("./subscribers");
router.use("/subscribers", subscribersRouter);

module.exports = router;