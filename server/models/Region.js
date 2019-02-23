const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema( {
    region: String,
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
    }],
});

module.exports = mongoose.model('RegionModel', RegionSchema);