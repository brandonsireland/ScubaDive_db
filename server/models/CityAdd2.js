const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CityAddTwoSchema = new Schema( {
    city_add_2: String
});

module.exports = mongoose.model('CityAddTwoModel', CityAddTwoSchema);