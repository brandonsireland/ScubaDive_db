const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema( {
    tags: [String]
});

module.exports = mongoose.model('TagsModel', TagsSchema);