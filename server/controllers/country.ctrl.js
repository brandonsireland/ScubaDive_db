const mongoose = require('mongoose');

const Country = require('../models/Country');

// Get
exports.get_all_countries = (req, res) => {
    // get all countries
    Country.find()
        .sort([
            ['country', 'ascending']
        ])
        .exec((err, countries) => {
            if (err) {
                return next(err)
            }
            res.send(countries.map(country => country))
        });
};

exports.get_all_countries_from_continent = (req, res) => {
    // get all countries from continent.
    Country.find({
            continent: req.params.continentId
        })
        .exec((err, countries) => {
            if (err) {
                return next(err)
            }
            res.send(countries.map(country => country))
        });
};

exports.get_country_id = (req, res) => {
    // get specific country
    Country.findById(req.params.countryId)
        .exec((err, country) => {
            if (err) {
                return next(err)
            }
            res.send(country)
        });
};

// Creation
exports.country_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: Country create GET');
};

exports.country_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: Country create POST');
};

// Deletion
exports.country_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: Country delete GET');
};

exports.country_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: Country delete POST');
};

// Updating 
exports.country_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: Country update GET');
};

exports.country_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: Country update POST');
};