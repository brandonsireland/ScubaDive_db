const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContinentSchema = new Schema( {
    continent: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }]
});

module.exports = mongoose.model('ContinentModel', ContinentSchema);