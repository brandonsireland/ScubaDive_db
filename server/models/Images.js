const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema( {
    title: String,
    src: String,
    divesites: [{
        type: Schema.Types.ObjectId,
        ref: 'DiveSiteModel'
    }],
    
},{ timestamps: true});

module.exports = mongoose.model('ImageModel', ImageSchema);