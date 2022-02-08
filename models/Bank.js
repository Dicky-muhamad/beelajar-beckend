const mongoose = require('mongoose')

const bankSchema = ({
    nameBank : {
        type : String,
        required : true
    },

    nomorRekening : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    imageUrl: {
        type : String,
        required: true
    }
    
})

module.exports = mongoose.model('Bank', bankSchema)