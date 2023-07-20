
const mongoose = require('mongoose')

const userSchema = new mongoose .Schema[{
   name: {
        type:string,
        required:[true,'name is required'],
        trim:true,
        maxLength:[20,'name must be less than 20 character'],
    },
     email:{
          type:string,
          required:[true,'email must  be required'],
          unique:true,
        },
    
}]

module.exports = mongoose.model("user",userSchema)