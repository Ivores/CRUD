const { Mongoose } = require("mongoose");

const {Schema, model}  = require('mongoose')

const schema = new Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = model('Token', schema)