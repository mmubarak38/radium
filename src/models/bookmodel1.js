const mongoose = require('mongoose')

const newBookSchema=new mongoose.Schema({
    name:{
        type:String, 
        required: true
    },
    author_id:{
        type:Number,
        required:true
    },
    price:Number,
    rating:Number,
}, {timestamps:true})

module.exports=mongoose.model('NewBook',newBookSchema)
