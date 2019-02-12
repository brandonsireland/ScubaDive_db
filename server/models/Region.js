const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema( {
    region: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }]
});

module.exports = mongoose.model('RegionModel', RegionSchema);