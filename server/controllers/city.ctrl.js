const mongoose = require('mongoose');

const City = require('../models/City');

// Get
exports.get_all_cities = (req, res) => {
    // get all cities
    City.find()
        .sort([
            ['city', 'ascending']
        ])
        .exec((err, cities) => {
            if (err) {
                return next(err)
            }
            res.send(cities.map(city => city))
        });
};

exports.get_all_cities_from_region = (req, res) => {
    // get all cities from region
    City.find({region:req.params.regionId})
    .exec((err, cities) => {
        if (err) {
            return next(err)
        }
        res.send(cities.map(city => city))
    });
};

exports.get_city_id = (req, res) => {
    // get specific city
    City.findById(req.params.cityId)
        .exec((err, city) => {
            if (err) {
                return next(err)
            }
            res.send(city)
    });
};

// Creation
exports.city_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: City create GET');
};

exports.city_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: City create POST');
};

// Deletion
exports.city_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: City delete GET');
};

exports.city_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: City delete POST');
};

// Updating 
exports.city_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: City update GET');
};

exports.city_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: City update POST');
};