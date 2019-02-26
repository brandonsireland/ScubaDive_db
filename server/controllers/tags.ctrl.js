const mongoose = require('mongoose');

const Tag = require('../models/Tags');
// Get
exports.get_all_tags = (req, res) => {
    // get all tags
    Tag.find({}, 'tags')
    .sort([
        ['tags', 'ascending']
    ])
    .exec((err, tags) => {
        if (err) {
            return next(err)
        }
        res.send(tags.map(tag => tag))
    });
};

exports.get_tag_id = (req, res) => {
    // get specific tag
    Tag.findById(req.params.tagId)
        .exec((err, tag) => {
            if (err) {
                return next(err)
            }
            res.send(tag)
    });
};

// Creation
exports.tag_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: Tag create GET');
};

exports.tag_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: Tag create POST');
};

// Deletion
exports.tag_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: Tag delete GET');
};

exports.tag_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: Tag delete POST');
};

// Updating 
exports.tag_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: Tag update GET');
};

exports.tag_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: Tag update POST');
};