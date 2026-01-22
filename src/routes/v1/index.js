const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const { FlightMiddleware } = require("../../middlewares/index");
const AirportController = require("../../controllers/airport-controller");
const router = express.Router();

//city routes
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

//flight routes
router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  FlightController.create,
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", FlightController.update);

//airport routes
router.post("/airports", AirportController.create);

module.exports = router;
