const mongoose = require('mongoose');

exports.get_all_types = (req, res) => {
    // get all types
    res.send('these are the specifics');
};

exports.get_type_id = (req, res) => {
    // get type
    res.send('this is an additional info with specificId: ' + JSON.stringify(req.params));
};

exports.post_type = (req, res, next) => {
    // add type
};

exports.delete_type = (req, res, next) => {
    // delete type
};

exports.update_type = (req, res, next) => {
    // update type 
};