const mongoose = require('mongoose');
const stream = require('stream');
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
            res.header("Content-Type",'application/json');
            res.send(divesites.map(divesite => divesite))
        });
};

exports.get_dive_site_id = (req, res, next) => {
        // get dive site by id
        DiveSite.findById(req.params.id)
        .populate({path:'continent', select: 'title'})
        .populate({path:'country', select: 'title'})
        .populate({path:'region', select: 'title'})
        .populate({path:'city', select: 'title'})
        .populate({path:'city_add', select: 'title'})
        .populate({path:'city_add_2', select: 'title'})
        .populate({path:'tags', select: 'title'})
        .populate({path:'types', select: 'title'})
        .populate({path:'dangers', select: 'title'})
        .populate({path:'access', select: 'title'})
        .populate({path:'exp_lvl', select: 'title'})
        .exec((err, divesite) => {
            if (err) {
                return next(err)
            }
        res.header("Content-Type",'application/json');
        res.send(divesite);
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