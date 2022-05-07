const fs = require('fs');
const AppError = require('../utils/appError.js');
const hostLocation = require('./../models/locationModel.js');
const factory = require('./handlerFactory.js');

exports.getAllLocations = factory.getAll(hostLocation);
exports.getLocation = factory.getOne(hostLocation);
exports.createLocation = factory.createOne(hostLocation);
exports.updateLocation = factory.updateOne(hostLocation);
exports.deleteLocation = factory.deleteOne(hostLocation);

exports.getLocatonsWithin = async (req, res, next) => {
  const { distance, latlng } = req.params;
  const [lat, lng] = latlng.split(',');

  const radius = distance / 6378.1;
  if (!lat || !lng) next(new AppError('Provide Correct Geo Coordinates', 400));

  console.log(distance, lat, lng);
  const locations = await hostLocation.find({
    hostPosition: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });
  res.status(200).json({
    status: 'Success',
    results: locations.length,
    data: {
      data: locations,
    },
  });
};

exports.getDistances = async (req, res, next) => {
  const { latlng } = req.params;
  const [lat, lng] = latlng.split(',');

  if (!lat || !lng) next(new AppError('Provide Correct Geo Coordinates', 400));

  console.log(lat, lng);

  const distances = await hostLocation.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [1 * lng, 1 * lat],
        },
        distanceField: 'distance',
      },
    },
  ]);
  res.status(200).json({
    status: 'Success',
    results: distances.length,
    data: {
      data: distances,
    },
  });
};
