const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypesSchema = new Schema( {
    title: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }]
},{ timestamps: true});

module.exports = mongoose.model('TypesModel', TypesSchema);