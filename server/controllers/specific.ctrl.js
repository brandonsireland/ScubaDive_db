const mongoose = require('mongoose');

const CityAdd2 = require('../models/CityAdd2');
// Get
exports.get_all_specifics = (req, res) => {
    // get all specifics
    CityAdd2.find({}, 'city_add_2')
        .sort([
            ['city_add_2', 'ascending']
        ])
        .exec((err, additionalsTwo) => {
            if (err) {
                return next(err)
            }
            res.send(additionalsTwo.map(additionalTwo => additionalTwo))
        });
};

exports.get_all_specifics_from_additional = (req, res) => {
    // get all specifics
    CityAdd2.find({city_add:req.params.addId})
    .exec((err, additionalsTwo) => {
        if (err) {
            return next(err)
        }
        res.send(additionalsTwo.map(additionalTwo => additionalTwo))
    });
};

exports.get_specific_id = (req, res) => {
    // get specific id
    CityAdd2.findById(req.params.specificId)
        .exec((err, additionalTwo) => {
            if (err) {
                return next(err)
            }
            res.send(additionalTwo)
    });
};

// Creation
exports.specific_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: Specific create GET');
};

exports.specific_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: Specific create POST');
};

// Deletion
exports.specific_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: Specific delete GET');
};

exports.specific_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: Specific delete POST');
};

// Updating 
exports.specific_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: Specific update GET');
};

exports.specific_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: Specific update POST');
};