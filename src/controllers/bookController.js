const BookModel1= require("../models/bookmodel1.js")
const AuthorModel= require("../models/authorModel")
const authorController= require("../controllers/authorController")
const mongoose = require('mongoose')


const createBook = async function (req, res) {
    const data= req.body
    let savedBook= await BookModel1.create(data)
    res.send({msg: savedBook})
}

  //To get the list of books written by Chetan Bhagat

const bookList = async function(req, res) {
    let FindAuthor = await AuthorModel.findOne({ author_name: "Chetan Bhagat" })   // find the other detalil
    let savedData = await BookModel1.find({ author_id: FindAuthor.author_id })      // by the help of find and previous author detail we can access the author_id which is same in  both
    res.send({msg: savedData })
}

  // find the author of “Two states” and update the book price to 100;  
  //   Send back the author_name and updated price in response


  const newPrice= async function (req, res) {
      let savedData = await BookModel1.findOne({name:"Two State"}).select({ author_id:1, _id:0})
      let author = await AuthorModel.findOne(savedData).select({author_name:1, _id:0})
      let changedPrice = await BookModel1.findOneAndUpdate({name:"Two State"},{price: 100}, {new:true}).select({price:1, _id:0})
      res.send({msg:author,changedPrice})
  }
const searchPrice= async function (req, res ) {
    let bookData= await BookModel1.find({price:{ $gte: 50, $lte: 100}}).select({author_id:1, _id: 0})
    let savedData= await AuthorModel.find({$or: bookData}).select({author_name:1, _id:0})
    res.send(savedData)
}



module.exports.createBook=createBook
module.exports.bookList=bookList

module.exports.newPrice=newPrice
module.exports.searchPrice=searchPrice
