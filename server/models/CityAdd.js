const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CityAddSchema = new Schema( {
    city_add: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    city: {
        type: Schema.Types.ObjectId,
        ref: 'CityModel'
    },
    city_adds2: [{
        type: Schema.Types.ObjectId,
        ref: 'CityAdd2Model'
    }]
});

module.exports = mongoose.model('CityAddModel', CityAddSchema);