const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DiveSiteSchema = new Schema( {
    title: String,
    description: String,
    geo_lat: Number,
    geo_long: Number,
    country_short: String,
    continent: String,
    country: String,
    region: String,
    city: String,
    city_add: String,
    city_add_2: String,
    tags: [String],
    types: [String],
    access: [String],
    quality: Number,
    exp_lvl: [String],
    bio_lvl: Number,
    dangers: [String],
    images: [String]
});

module.exports = mongoose.model('Divesite', DiveSiteSchema);
