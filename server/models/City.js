const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema( {
    city: String
});

module.exports = mongoose.model('CityModel', CitySchema);