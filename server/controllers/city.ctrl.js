const mongoose = require('mongoose');

exports.get_all_cities = (req, res) => {
    // get all cities
    res.send('these are the cities');
};

exports.get_city_id = (req, res) => {
    // get specific city
    res.send('this is a specific city with id: ' + req.params.cityId);
};

exports.post_city = (req, res, next) => {
    // add city
};

exports.delete_city = (req, res, next) => {
    // delete city
};

exports.update_city = (req, res, next) => {
    // update city
};