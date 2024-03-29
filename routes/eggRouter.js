const express = require('express');
const egg = require("../models/egg");
const eggRouter = express.Router()


eggRouter.get("/", async (req, res, next) => {
    try {
        const foundEggs = await egg.find()
        return res.status(200).send(foundEggs)
        
    } catch (error) {
        res.status(500)
        return next(error);
    }
})

eggRouter.post("/", async (req, res, next) => {
    try {
        const newEggs = new egg(req.body)
        const savedEggs = await newEggs.save()
        return res.status(201).send(newEggs)
    } catch (error) {
        res.status(500)
        return next(error);
    }
})

eggRouter.put("/:eggId/updateEggCount", async (req, res, next) => {
    try {
        const foundEgg = await egg.findById(req.params.eggId);
        
        // Check if the request body contains a valid quantity
        const { quantity } = req.body;
        if (quantity !== undefined && typeof quantity === 'number') {
            // Update the quantity based on the request
            foundEgg.quantity += quantity;
        } else {
            return res.status(400).json({ message: 'Invalid quantity provided' });
        }

        // Save the updated egg
        const savedEgg = await foundEgg.save();

        return res.status(200).send(savedEgg);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});


module.exports = eggRouter