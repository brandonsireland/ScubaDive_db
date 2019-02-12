const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Continent = require('./Continent');
const CountryShort = require('./CountryShort');
const Country = require('./Country');
const Region = require('./Region');
const City = require('./City');
const CityAdd = require('./CityAdd');
const CityAdd2 = require('./CityAdd2');
const Tags = require('./Tags');
const Types = require('./Types');

const DiveSiteSchema = new Schema( {
    title: String,
    description: String,
    geo_lat: Number,
    geo_long: Number,
    country_short: { 
        type: Schema.Types.ObjectId, 
        ref: 'CountryShort'
    },
    continent: { 
        type: Schema.Types.ObjectId, 
        ref: 'Continent'
    },
    country: { 
        type: Schema.Types.ObjectId, 
        ref: 'Country'
    },
    region: { 
        type: Schema.Types.ObjectId, 
        ref: 'Region'
    },
    city: { 
        type: Schema.Types.ObjectId, 
        ref: 'City'
    },
    city_add: { 
        type: Schema.Types.ObjectId, 
        ref: 'CityAdd'
    },
    city_add_2: { 
        type: Schema.Types.ObjectId, 
        ref: 'CityAdd2'
    },
    tags: { 
        type: Schema.Types.ObjectId, 
        ref: 'Tags'
    },
    types: { 
        type: Schema.Types.ObjectId, 
        ref: 'Types'
    },
    access: [String],
    quality: Number,
    exp_lvl: [String],
    bio_lvl: Number,
    dangers: [String],
    images: [String]
});

module.exports = mongoose.model('DiveSiteModel', DiveSiteSchema);
