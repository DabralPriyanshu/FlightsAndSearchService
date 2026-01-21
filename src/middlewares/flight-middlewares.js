const validateCreateFlight = (req, res, next) => {
  const {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price,
  } = req.body;
  if (
    !flightNumber ||
    !airplaneId ||
    !departureAirportId ||
    !arrivalAirportId ||
    !arrivalTime ||
    !departureTime ||
    !price
  ) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request body for creating flight",
      err: "Missing mandatory properties in incoming request body",
    });
  }
  next();
};

module.exports = { validateCreateFlight };
