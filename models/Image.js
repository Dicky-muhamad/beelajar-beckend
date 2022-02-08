const mongoose = require('mongoose');


const imageSchema = ({
    imageUrl : {
        type : String ,
        required : true
    }
})

module.exports = mongoose.model('Image', imageSchema)