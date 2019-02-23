const mongoose = require('mongoose');

exports.get_all_regions = (req, res) => {
    // get all regions
    res.send('these are the regions');
};

exports.get_region_id = (req, res) => {
    // get specific region
    res.send('this is a specific region with regionId : ' + req.params.regionId);
};

exports.post_region = (req, res, next) => {
    // add region
};

exports.delete_region = (req, res, next) => {
    // delete region
};

exports.update_region = (req, res, next) => {
    // update region
};