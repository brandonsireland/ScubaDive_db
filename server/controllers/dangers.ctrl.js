const mongoose = require('mongoose');

const Danger = require('../models/Dangers');

// Get
exports.get_all_dangers = (req, res) => {
    // get all dangers
    Danger.find()
    .sort([
        ['title', 'ascending']
    ])
    .exec((err, dangers) => {
        if (err) {
            return next(err)
        }
        res.send(dangers.map(danger => danger))
    });
};

exports.get_danger_id = (req, res) => {
    // get specific danger
    Danger.findById(req.params.tagId)
        .exec((err, danger) => {
            if (err) {
                return next(err)
            }
            res.send(danger)
    });
};

// Creation
exports.danger_create_get = (req, res, next) => {
    // get danger creation form
    res.send('NOT IMPLEMENTED: danger create GET');
};

exports.danger_create_post = (req, res, next) => {
    // post danger site creation
    res.send('NOT IMPLEMENTED: danger create POST');
};

// Deletion
exports.danger_delete_get = (req, res, next) => {
    // get danger site delete form
    res.send('NOT IMPLEMENTED: danger delete GET');
};

exports.danger_delete_post = (req, res, next) => {
    // post danger site delete
    res.send('NOT IMPLEMENTED: danger delete POST');
};

// Updating 
exports.danger_update_get = (req, res, next) => {
    // get danger site update form
    res.send('NOT IMPLEMENTED: danger update GET');
};

exports.danger_update_post = (req, res, next) => {
    // post danger site update
    res.send('NOT IMPLEMENTED: danger update POST');
};