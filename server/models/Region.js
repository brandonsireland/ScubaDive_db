const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema( {
    region: String
});

module.exports = mongoose.model('RegionModel', RegionSchema);