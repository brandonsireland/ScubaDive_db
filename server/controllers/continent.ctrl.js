const mongoose = require('mongoose');

const Continent = require('../models/Continent');

// Get
exports.get_all_continents = (req, res, next) => {
    // get all continents
    Continent.find()
        .sort([
            ['title', 'ascending']
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

// Creation
exports.continent_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: Continent create GET');
};

exports.continent_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: Continent create POST');
};

// Deletion
exports.continent_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: Continent delete GET');
};

exports.continent_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: Continent delete POST');
};

// Updating 
exports.continent_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: Continent update GET');
};

exports.continent_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: Continent update POST');
};