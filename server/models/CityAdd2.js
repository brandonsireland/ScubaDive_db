const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CityAddTwoSchema = new Schema( {
    city_add_2: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    city_add: {
        type: Schema.Types.ObjectId,
        ref: 'CityAddModel'
    }
});

module.exports = mongoose.model('CityAddTwoModel', CityAddTwoSchema);