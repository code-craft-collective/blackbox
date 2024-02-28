const Plane = require("../models/Destination.model.js");
const mongoose = require("mongoose");
const router = require("express").Router();

router.get("/destinations", (req, res) => {
  Plane.find({})
    .then((planes) => {
      console.log("Destinations available ->", planes);
      res.json(planes);
    })
    .catch((error) => {
      console.error("Error while retrieving destinations ->", error);
      res.status(500).send({ error: "Failed to retrieve destinations" });
    });
});

router.get("/destinations/:destinationId", (req, res) => {
  const { destinationId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(destinationId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Plane.findById(destinationId)
    .then((plane) => {
      console.log("Retrieved destination ->", plane);
      res.json(plane);
    })
    .catch((error) => {
      console.error("Error while retrieving destination ->", error);
      res.status(500).send({ error: "Failed to retrieve destination" });
    });
});

router.get("/destinations/flights/:destinationId", (req, res) => {
  const { destinationId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(destinationId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Plane.find({ destination: destinationId })
    .then((flights) => {
      console.log("Retrieved flights for destination ->", flights);
      res.json(flights);
    })
    .catch((error) => {
      console.error("Error while retrieving flights for destination ->", error);
      res
        .status(500)
        .send({ error: "Failed to retrieve flights for destination" });
    });
});

router.post("/destinations", (req, res, next) => {
  const {
    flightNumber,
    airline,
    destination,
    departureTime,
    arrivalTime,
    seatAvailability,
    bookedSeats,
    price,
  } = req.body;

  const newPlane = {
    flightNumber,
    airline,
    destination,
    departureTime,
    arrivalTime,
    seatAvailability,
    bookedSeats,
    price,
  };

  Plane.create(newPlane)
    .then((createdPlane) => {
      res.json(createdPlane);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Failed to create new destination", details: err });
    });
});
