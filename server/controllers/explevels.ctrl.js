const mongoose = require('mongoose');

const ExpLevel = require('../models/ExperienceLevel');
// Get
exports.get_all_explevels = (req, res) => {
    // get all explevels
    ExpLevel.find()
    .sort([
        ['title', 'ascending']
    ])
    .exec((err, expleveles) => {
        if (err) {
            return next(err)
        }
        res.send(expleveles.map(explevel => explevel))
    });
};

exports.get_explevel_id = (req, res) => {
    // get specific explevel
    ExpLevel.findById(req.params.tagId)
        .exec((err, explevel) => {
            if (err) {
                return next(err)
            }
            res.send(explevel)
    });
};

// Creation
exports.explevel_create_get = (req, res, next) => {
    // get explevel creation form
    res.send('NOT IMPLEMENTED: explevel create GET');
};

exports.explevel_create_post = (req, res, next) => {
    // post explevel site creation
    res.send('NOT IMPLEMENTED: explevel create POST');
};

// Deletion
exports.explevel_delete_get = (req, res, next) => {
    // get explevel site delete form
    res.send('NOT IMPLEMENTED: explevel delete GET');
};

exports.explevel_delete_post = (req, res, next) => {
    // post explevel site delete
    res.send('NOT IMPLEMENTED: explevel delete POST');
};

// Updating 
exports.explevel_update_get = (req, res, next) => {
    // get explevel site update form
    res.send('NOT IMPLEMENTED: explevel update GET');
};

exports.explevel_update_post = (req, res, next) => {
    // post explevel site update
    res.send('NOT IMPLEMENTED: explevel update POST');
};