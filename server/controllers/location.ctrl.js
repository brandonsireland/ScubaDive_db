const mongoose = require('mongoose');

const Continent = require('../models/Continent');

exports.get_all_continents = (req, res) => {
    // get all continents
    // Continent.find({continent: continent })
    //     .then(data =>  {
    //         res.json(data)
    //         resolve()
    //     })
    //     .catch(err => reject(err) );
    res.send('these are the continents');

};

exports.get_continentId = (req, res, next) => {
        // get specific continent
        res.send('this is a specific continent with continentId : ' + req.params.continentId)
};

exports.get_all_countries = (req, res, next) => {
    // get all countries
    res.send('these are the countries');
};

exports.get_countryId = (req, res, next) => {
    // get specific country
    res.send('this is a specific country with countryId: ' + req.params.countryId)
};

exports.get_all_regions = (req, res, next) => {
    // get all regions
    res.send('these are the regions');
};

exports.get_regionId = (req, res, next) => {
    // get specific region
    res.send('this is a specific region with regionId : ' + req.params.regionId);
};

exports.get_all_cities = (req, res, next) => {
    // get all cities
    res.send('these are the cities');
};

exports.get_cityId = (req, res, next) => {
    // get specific city
    res.send('this is a specific city with id: ' + req.params.cityId); 
};

exports.get_all_additionals = (req, res, next) => {
    // get all additional info
    res.send('these are the additionals');
};

exports.get_additionalId = (req, res, next) => {
    // get specific additional info
    res.send('this is a specific additional info with id: ' + JSON.stringify(req.params));
};

exports.get_all_specific = (req, res, next) => {
    // get all specifics
    res.send('these are the additionals');
};

exports.get_specificId = (req, res, next) => {
    // get specific id
    res.send('this is a specific additional info with specificId: ' + JSON.stringify(req.params));
};