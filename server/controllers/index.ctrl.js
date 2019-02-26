const mongoose = require('mongoose');
const DiveSite = require('../models/DiveSite');
const async = require('async');

const City = require('../models/City');
const CityAdd = require('../models/CityAdd');
const CityAdd2 = require('../models/CityAdd2');
const Region = require('../models/Region');
const Country = require('../models/Country');
const Continent = require('../models/Continent');
const Tags = require('../models/Tags');
const Types = require('../models/Types');

exports.get_index = (req, res) => {
    async.parallel({
        dive_site_count: callback => DiveSite.countDocuments({}, callback),
        city_count: callback => City.countDocuments({}, callback),
        city_add_count: callback => CityAdd.countDocuments({}, callback),
        city_add2_count: callback => CityAdd2.countDocuments({}, callback),
        region_count: callback => Region.countDocuments({}, callback),
        country_count: callback => Country.countDocuments({}, callback),
        continent_count: callback => Continent.countDocuments({}, callback),
        tag_count: callback => Tags.countDocuments({}, callback),
        type_count: callback => Types.countDocuments({}, callback)
    }, (err, results) => {
        res.send(JSON.stringify(results))
    })
};