const mongoose = require('mongoose');

const Access = require('../models/Access');
// Get
exports.get_all_accesses = (req, res) => {
    // get all accesses
    Access.find()
    .sort([
        ['title', 'ascending']
    ])
    .exec((err, accesses) => {
        if (err) {
            return next(err)
        }
        res.send(accesses.map(access => access))
    });
};

exports.get_access_id = (req, res) => {
    // get specific access
    Access.findById(req.params.tagId)
        .exec((err, access) => {
            if (err) {
                return next(err)
            }
            res.send(access)
    });
};

// Creation
exports.access_create_get = (req, res, next) => {
    // get access creation form
    res.send('NOT IMPLEMENTED: Access create GET');
};

exports.access_create_post = (req, res, next) => {
    // post access site creation
    res.send('NOT IMPLEMENTED: Access create POST');
};

// Deletion
exports.access_delete_get = (req, res, next) => {
    // get access site delete form
    res.send('NOT IMPLEMENTED: Access delete GET');
};

exports.access_delete_post = (req, res, next) => {
    // post access site delete
    res.send('NOT IMPLEMENTED: Access delete POST');
};

// Updating 
exports.access_update_get = (req, res, next) => {
    // get access site update form
    res.send('NOT IMPLEMENTED: Access update GET');
};

exports.access_update_post = (req, res, next) => {
    // post access site update
    res.send('NOT IMPLEMENTED: Access update POST');
};