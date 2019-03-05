const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContinentSchema = new Schema( {
    title: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    countries: [{
        type: Schema.Types.ObjectId,
        ref: 'CountryModel'
    }],
},{ timestamps: true});

module.exports = mongoose.model('ContinentModel', ContinentSchema);