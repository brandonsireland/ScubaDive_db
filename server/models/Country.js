const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema( {
    country: String
});

module.exports = mongoose.model('CountryModel', CountrySchema);