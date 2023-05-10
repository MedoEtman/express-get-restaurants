const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.set("json spaces", 2);
app.use(express.json());

//TODO: Create your GET Request Route Below: 

a//app.use(express.urlencoded()); // parse the request body with urlencoded values

app.get("/restaurants",  async (request, response, next)=>{
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
});

app.get("/restaurants/:id", async (request, response, next) => {
    const index = request.params.id 
    const restaurantAtIndex = await Restaurant.findByPk(index);
    response.json(restaurantAtIndex);

});
// express route to add a new restaurant to database

app.post("/restaurants", async (request, response, next) => {
    const restaurant = request.body;
    await Restaurant.create(restaurant);
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
})
// express route to update(replace) a restaurant in database
app.put("/restaurants/:id", async (request, response, next) => {
    const index = request.params.id 
    const restaurantAtIndex = await Restaurant.findByPk(index);
    const newRestaurant = request.body;
    await restaurantAtIndex.update(newRestaurant);
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
})

// express route to delete a restaurant in given index in database
app.delete("/restaurants/:id", async (request, response, next) => {
    const index = request.params.id 
    const restaurantAtIndex = await Restaurant.findByPk(index);
    await restaurantAtIndex.destroy();
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
});

module.exports = app;