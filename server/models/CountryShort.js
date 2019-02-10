const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountryShortSchema = new Schema( {
    country_short: String
});

module.exports = mongoose.model('CountryShortModel', CountryShortSchema);