const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CityAddSchema = new Schema( {
    title: String,
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
},{ timestamps: true});

module.exports = mongoose.model('CityAddModel', CityAddSchema);