const Subscriber = require("../models/subscriber")

exports.getAll = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getOne = (req, res) => {
    res.send(res.subscriber)
}

exports.saveItem = async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateItem = async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }

    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }

    try {
        const updatedSubscriber = await res.subscriber.save()
        res.status(200).json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.removeItem = async (req, res) => {
    try {
        await res.subscriber.remove()
        res.status(200).json({ message: "Subscriber deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}