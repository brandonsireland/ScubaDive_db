const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema( {
    country: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    continent: { 
        type: Schema.Types.ObjectId, 
        ref: 'ContinentModel'
    },
    regions: [{
        type: Schema.Types.ObjectId, 
        ref: 'RegionModel'
    }],
    country_short: {
        type: Schema.Types.ObjectId, 
        ref: 'CountryShortModel'
    }
});

module.exports = mongoose.model('CountryModel', CountrySchema);