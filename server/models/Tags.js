const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema( {
    tags: [String],
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }]
});

module.exports = mongoose.model('TagsModel', TagsSchema);