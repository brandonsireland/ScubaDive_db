const mongoose = require('mongoose');

const Country = require('../models/Country');

exports.get_all_countries = (req, res) => {
    // get all countries within the continent
    Country.find({}, 'country')
        .sort([
            ['country', 'ascending']
        ])
        .exec((err, countries) => {
            if (err) {
                return next(err)
            }
            res.send(countries.map(country => country.country))
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

exports.get_countries_from_continent = (req, res) => {
    // get all countries from continent.
    Country.findById(req.params.countryId)
        .exec((err, country) => {
            if (err) {
                return next(err)
            }
            res.send(country)
        });
};

exports.post_country = (req, res, next) => {
    // add country
};

exports.delete_country = (req, res, next) => {
    // delete country
};

exports.update_country = (req, res, next) => {
    // update country
};