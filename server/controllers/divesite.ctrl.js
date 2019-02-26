const mongoose = require('mongoose');

const DiveSite = require('../models/DiveSite');

// Get
exports.get_all_dive_sites = (req, res, next) => {
        // get all dive sites
        DiveSite.find({}, 'title')
        .sort([
            ['title', 'ascending']
        ])
        .exec((err, divesites) => {
            if (err) {
                return next(err)
            }
            res.send(divesites.map(divesite => divesite))
        });
};

exports.get_dive_site_id = (req, res, next) => {
        // get dive site by id
        DiveSite.findById(req.params.id)
        .exec((err, country) => {
            if (err) {
                return next(err)
            }
            res.send(country)
        });
};

// Creation
exports.dive_site_create_get = (req, res, next) => {
        // get dive site creation form
        res.send('NOT IMPLEMENTED: Dive Site create GET');
};

exports.dive_site_create_post = (req, res, next) => {
        // post dive site creation
        res.send('NOT IMPLEMENTED: Dive Site create POST');
};

// Deletion
exports.dive_site_delete_get = (req, res, next) => {
        // get dive site delete form
        res.send('NOT IMPLEMENTED: Dive Site delete GET');
};

exports.dive_site_delete_post = (req, res, next) => {
        // post dive site delete
        res.send('NOT IMPLEMENTED: Dive site delete POST');
};

// Updating 
exports.dive_site_update_get = (req, res, next) => {
        // get dive site update form
        res.send('NOT IMPLEMENTED: Dive site update GET');
};

exports.dive_site_update_post = (req, res, next) => {
        // post dive site update
        res.send('NOT IMPLEMENTED: Dive site update POST');
};