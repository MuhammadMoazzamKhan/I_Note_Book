const mongoose = require("mongoose");

//     Create Schema 
const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default: Date.now
        }
})

//  create Model 

const User = mongoose.model("user",UserSchema)
module.exports = User;
