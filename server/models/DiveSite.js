const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        ref: 'CityAddTwoModel'
    },
    tags: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'TagsModel'
    }],
    types: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'TypesModel'
    }],
    exp_lvl: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'ExperienceLevelModel'
    }],
    dangers: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'DangersModel'
    }],
    access: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'AccessModel'
    }],
    images: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'AccessModel'
    }],
    quality: Number,
    bio_lvl: Number,
},{ timestamps: true});

module.exports = mongoose.model('DiveSiteModel', DiveSiteSchema);
