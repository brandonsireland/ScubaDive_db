const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema( {
    title: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    country: {
        type: Schema.Types.ObjectId,
        ref: 'CountryModel'
    },
    cities: [{
        type: Schema.Types.ObjectId,
        ref: 'CityModel'
    }]
},{ timestamps: true});

module.exports = mongoose.model('RegionModel', RegionSchema);