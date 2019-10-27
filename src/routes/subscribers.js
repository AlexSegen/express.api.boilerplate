const express = require("express");
const router = express.Router();

const Subscriber = require("../models/subscriber")
const Controller = require("../controllers/subscribers")

router.get("/", Controller.getAll);

router.get("/:id", getSubscriber, Controller.getOne);

router.post("/", Controller.saveItem);

router.patch("/:id", getSubscriber, Controller.updateItem);

router.delete("/:id", getSubscriber, Controller.removeItem);

async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: "Subscriber not found" })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.subscriber = subscriber
    next();
}

module.exports = router;