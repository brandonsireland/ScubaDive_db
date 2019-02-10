const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypesSchema = new Schema( {
    types: [String]
});

module.exports = mongoose.model('TagsModel', TypesSchema);