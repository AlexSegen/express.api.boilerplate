"use strict";
const express = require("express");
const router = express.Router();

const subscribersRouter = require("./subscribers");
router.use("/subscribers", subscribersRouter);

module.exports = router;