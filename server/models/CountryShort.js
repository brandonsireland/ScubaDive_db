const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountryShortSchema = new Schema( {
    country_short: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }]
});

module.exports = mongoose.model('CountryShortModel', CountryShortSchema);