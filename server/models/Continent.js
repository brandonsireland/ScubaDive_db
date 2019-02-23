const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContinentSchema = new Schema( {
    continent: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    countries: [{
        type: Schema.Types.ObjectId,
        ref: 'CountryModel'
    }],
});

ContinentSchema
.virtual('url')
.get(()=> 'api/location/continent/'+ this._id)

module.exports = mongoose.model('ContinentModel', ContinentSchema);