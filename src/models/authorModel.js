const mongoose= require ('mongoose')

const authorSchema= new mongoose.Schema({
    author_name:{
        type:String,
        required: true
     },
     age: Number,
     address: String,
  
},{ timestamps: true})

module.exports=mongoose.model('myauthors',authorSchema)