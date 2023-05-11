const { Router } = require("express");
const Restaurant = require("../../models");

const router = Router();

router.get("/", async (req, res, next) => {
   try{
    const restaurants = await Restaurant.findAll();
    res.json(restaurants)
   } catch (error) {
    next(error);
   }
});

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
    const restaurant = await Restaurant.findByPkid);
    res.json(restaurant);
}

});
module.exports = router;