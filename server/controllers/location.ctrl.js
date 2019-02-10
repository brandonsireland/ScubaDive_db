const mongoose = require('mongoose');
const DiveSite = require('../models/DiveSite');


exports.get_all_continents = (req, res, next) => {
    // update dive site in db 
    DiveSite.find({}, (err, continent)=> {
        if(err){
            res.send(err);
        };
        res.json(continent)
    })

};

exports.get_continent = (req, res, next) => {
        // update dive site in db 
};

exports.get_all_countries = (req, res, next) => {
    // update dive site in db 
};

exports.get_country = (req, res, next) => {
    // update dive site in db 
};

exports.get_all_regions = (req, res, next) => {
    // update dive site in db 
};

exports.get_region = (req, res, next) => {
    // update dive site in db 
};

exports.get_all_cities = (req, res, next) => {
    // update dive site in db 
};

exports.get_city = (req, res, next) => {
    // update dive site in db 
};

exports.get_all_additionals = (req, res, next) => {
    // update dive site in db 
};

exports.get_additional = (req, res, next) => {
    // update dive site in db 
};