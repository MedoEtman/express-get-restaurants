const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.set("json spaces", 2);
app.use(express.json());

//TODO: Create your GET Request Route Below: 


app.get("/restaurants",  async (req, res, next) => {
    const restaurants = await Restaurant.findAll({});
    res.json(restaurants);
});

app.get("/restaurants/:id", async (req, res, next) => {
    const number = req.params.id 
    const restaurant = await Restaurant.findByPk(index);
    res.json(restaurant);

});
// express route to add a new restaurant to database

app.post("/restaurants", async (req, res, next) => {
    const restaurant = req.body;
    await Restaurant.create(restaurant);
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
})
// express route to update(replace) a restaurant in database
app.put("/restaurants/:id", async (req, res, next) => {
    const index = req.params.id 
    const restaurant = await Restaurant.findByPk(index);
    const newRestaurant = req.body;
    await restaurant.update(newRestaurant);
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
})

// express route to delete a restaurant in given index in database
app.delete("/restaurants/:id", async (req, res, next) => {
    const index = req.params.id 
    const restaurant = await Restaurant.findByPk(index);
    await restaurant.destroy();
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
});

module.exports = app;