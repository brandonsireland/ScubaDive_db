const mongoose = require('mongoose');

const CityAdd = require('../models/CityAdd');

// Get
exports.get_all_additionals = (req, res) => {
    // get all additional info
    CityAdd.find()
        .sort([
            ['city_add', 'ascending']
        ])
        .exec((err, additionals) => {
            if (err) {
                return next(err)
            }
            res.send(additionals.map(additional => additional))
        });
};

exports.get_all_additionals_from_city = (req, res) => {
    // get all additional info from city
    CityAdd.find({city:req.params.cityId})
    .exec((err, additionals) => {
        if (err) {
            return next(err)
        }
        res.send(additionals.map(additional => additional))
    });
};

exports.get_additional_id = (req, res) => {
    // get specific additional info
    CityAdd.findById(req.params.addId)
        .exec((err, additional) => {
            if (err) {
                return next(err)
            }
            res.send(additional)
    });
};

// Creation
exports.additional_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: Additional create GET');
};

exports.additional_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: Additional create POST');
};

// Deletion
exports.additional_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: Additional delete GET');
};

exports.additional_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: Additional delete POST');
};

// Updating 
exports.additional_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: Additional update GET');
};

exports.additional_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: Additional update POST');
};