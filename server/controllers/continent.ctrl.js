const mongoose = require('mongoose');

const Continent = require('../models/Continent');

exports.get_all_continents = (req, res, next) => {
    // get all continents
    Continent.find({}, 'continent')
        .sort([
            ['continent', 'ascending']
        ])
        .exec((err, continents) => {
            if (err) {
                return next(err)
            }
            res.send(continents.map(continent => continent))
        });

};

exports.get_continent_id = (req, res, next) => {
    // get specific continent
    Continent.findById(req.params.continentId)
        .exec((err, continent) => {
            if (err) {
                return next(err)
            }
            res.send(continent)
        });
};

exports.post_continent = (req, res, next) => {
    // add continent
};

exports.delete_continent = (req, res, next) => {
    // delete continent
};

exports.update_continent = (req, res, next) => {
    // update continent
};