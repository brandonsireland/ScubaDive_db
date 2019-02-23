const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema( {
    city: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    region: {
        type: Schema.Types.ObjectId,
        ref: 'RegionModel'
    },
    city_adds: [{
        type: Schema.Types.ObjectId,
        ref: 'CityAddModel'
    }],
});

module.exports = mongoose.model('CityModel', CitySchema);