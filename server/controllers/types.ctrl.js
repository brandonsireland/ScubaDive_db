const mongoose = require('mongoose');

const Type = require('../models/Types');

// Get
exports.get_all_types = (req, res) => {
    // get all types
    Type.find({}, 'types divesites')
    .sort([
        ['types', 'ascending']
    ])
    .exec((err, types) => {
        if (err) {
            return next(err)
        }
        res.send(types.map(type => type))
    });
};

exports.get_type_id = (req, res) => {
    // get type
    Type.findById(req.params.typeId)
        .exec((err, type) => {
            if (err) {
                return next(err)
            }
            res.send(type)
    });
};

// Creation
exports.type_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: Type create GET');
};

exports.type_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: Type create POST');
};

// Deletion
exports.type_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: Type delete GET');
};

exports.type_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: Type delete POST');
};

// Updating 
exports.type_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: Type update GET');
};

exports.type_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: Type update POST');
};