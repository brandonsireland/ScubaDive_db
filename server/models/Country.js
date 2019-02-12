const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema( {
    country: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }]
});

module.exports = mongoose.model('CountryModel', CountrySchema);