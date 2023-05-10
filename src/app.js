const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.set("json spaces", 2);

//TODO: Create your GET Request Route Below: 

app.post("/restaurants", async (req, res, next) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        next(error);
    }
})

app.get("/restaurants", async (req, res, next) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        next(error);
    }
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("something broke!");
});

module.exports = app;