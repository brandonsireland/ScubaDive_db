const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CityAddSchema = new Schema( {
    city_add: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }]
});

module.exports = mongoose.model('CityAddModel', CityAddSchema);