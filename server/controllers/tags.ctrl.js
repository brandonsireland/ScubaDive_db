const mongoose = require('mongoose');

exports.get_all_tags = (req, res) => {
    // get all tags
    res.send('these are the specifics');
};

exports.get_tag_id = (req, res) => {
    // get specific tag
    res.send('this is an additional info with specificId: ' + JSON.stringify(req.params));
};

exports.post_tag = (req, res, next) => {
    // add tag
};

exports.delete_tag = (req, res, next) => {
    // delete tag
};

exports.update_tag = (req, res, next) => {
    // update tag
};