const mongoose = require('mongoose');

exports.get_all_specific = (req, res) => {
    // get all specifics
    res.send('these are the specifics');
};

exports.get_specific_id = (req, res) => {
    // get specific id
    res.send('this is an additional info with specificId: ' + JSON.stringify(req.params));
};

exports.post_specific = (req, res, next) => {
    // add specific
};

exports.delete_specific = (req, res, next) => {
    // delete specific
};

exports.update_specific = (req, res, next) => {
    // update specific
};