const mongoose = require('mongoose');

exports.get_all_additionals = (req, res) => {
    // get all additional info
    res.send('these are the additionals');
};

exports.get_additional_id = (req, res) => {
    // get specific additional info
    res.send('this is a specific additional info with id: ' + JSON.stringify(req.params));
};

exports.post_additional = (req, res, next) => {
    // add specific additional info
};

exports.delete_additional = (req, res, next) => {
    // delete specific additional info
};

exports.update_additional = (req, res, next) => {
    // update specific additional info
};