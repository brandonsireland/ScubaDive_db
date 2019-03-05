const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CityAddTwoSchema = new Schema( {
    title: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    city_add: {
        type: Schema.Types.ObjectId,
        ref: 'CityAddModel'
    }
},{ timestamps: true});

module.exports = mongoose.model('CityAddTwoModel', CityAddTwoSchema);