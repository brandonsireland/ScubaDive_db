const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContinentSchema = new Schema( {
    continent: String
});

module.exports = mongoose.model('ContinentModel', ContinentSchema);