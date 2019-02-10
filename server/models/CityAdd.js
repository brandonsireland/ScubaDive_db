const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CityAddSchema = new Schema( {
    city_add: String
});

module.exports = mongoose.model('CityAddModel', CityAddSchema);