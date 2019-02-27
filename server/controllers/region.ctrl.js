const mongoose = require('mongoose');

const Region = require('../models/Region')

// Get
exports.get_all_regions = (req, res, next) => {
    // get all regions
    Region.find({}, 'region divesites')
        .sort([
            ['region', 'ascending']
        ])
        .exec((err, regions) => {
            if (err) {
                return next(err)
            }
            res.send(regions.map(region => region))
        });
};

exports.get_all_regions_from_country = (req, res, next) => {
    // get all regions from country.
    Region.find({country:req.params.countryId})
    .exec((err, regions) => {
        if (err) {
            return next(err)
        }
        res.send(regions.map(region => region))
    });
}

exports.get_region_id = (req, res, next) => {
    // get specific region
    Region.findById(req.params.regionId)
        .exec((err, region) => {
            if (err) {
                return next(err)
            }
            res.send(region)
    });
};

// Creation
exports.region_create_get = (req, res, next) => {
    // get dive site creation form
    res.send('NOT IMPLEMENTED: Region create GET');
};

exports.region_create_post = (req, res, next) => {
    // post dive site creation
    res.send('NOT IMPLEMENTED: Region create POST');
};

// Deletion
exports.region_delete_get = (req, res, next) => {
    // get dive site delete form
    res.send('NOT IMPLEMENTED: Region delete GET');
};

exports.region_delete_post = (req, res, next) => {
    // post dive site delete
    res.send('NOT IMPLEMENTED: Region delete POST');
};

// Updating 
exports.region_update_get = (req, res, next) => {
    // get dive site update form
    res.send('NOT IMPLEMENTED: Region update GET');
};

exports.region_update_post = (req, res, next) => {
    // post dive site update
    res.send('NOT IMPLEMENTED: Region update POST');
};