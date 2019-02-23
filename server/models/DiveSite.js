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
        ref: 'CountryShortModel'
    },
    continent: { 
        type: Schema.Types.ObjectId, 
        ref: 'ContinentModel'
    },
    country: { 
        type: Schema.Types.ObjectId, 
        ref: 'CountryModel'
    },
    region: { 
        type: Schema.Types.ObjectId, 
        ref: 'RegionModel'
    },
    city: { 
        type: Schema.Types.ObjectId, 
        ref: 'CityModel'
    },
    city_add: { 
        type: Schema.Types.ObjectId, 
        ref: 'CityAddModel'
    },
    city_add_2: { 
        type: Schema.Types.ObjectId, 
        ref: 'CityAdd2Model'
    },
    tags: { 
        type: Schema.Types.ObjectId, 
        ref: 'TagsModel'
    },
    types: { 
        type: Schema.Types.ObjectId, 
        ref: 'TypesModel'
    },
    access: [String],
    quality: Number,
    exp_lvl: [String],
    bio_lvl: Number,
    dangers: [String],
    images: [String]
});

module.exports = mongoose.model('DiveSiteModel', DiveSiteSchema);
