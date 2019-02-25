const mongoose = require('mongoose');

// Get
exports.get_all_tags = (req, res) => {
    // get all tags
    res.send('NOT IMPLEMENTED: Tags all GET');
};

exports.get_tag_id = (req, res) => {
    // get specific tag
    res.send('NOT IMPLEMENTED: Tag by id GET');
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