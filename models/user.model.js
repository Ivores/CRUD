const { Mongoose } = require("mongoose");

const {Schema, model}  = require('mongoose')

const schema = new Schema({
    id: {
        type: Number
    },
    username: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    isSuperUser:{
        type: Boolean
    }
})


module.exports = model('User', schema)