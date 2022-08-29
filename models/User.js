const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    cretedDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)