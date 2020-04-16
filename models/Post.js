const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: false
        },
    image: {
        type: String,
        required: false
        },        
});

module.exports = mongoose.model('links', PostSchema);