const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountryShortSchema = new Schema( {
    title: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    country: {
        type: Schema.Types.ObjectId,
        ref: 'CountryModel'
    }
},{ timestamps: true});

module.exports = mongoose.model('CountryShortModel', CountryShortSchema);