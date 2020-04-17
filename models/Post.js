const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: false
        },
    comment: {
        type: String,
        required: true
        },    
    respuesta: {
            type: String,
            required: false
            },
});

module.exports = mongoose.model('comments', PostSchema);