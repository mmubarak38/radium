const AuthorModel= require("../models/authorModel")
//const mongoose= require("mongoose")

const createAuthor = async function (req, res) {
    const data= req.body
    let savedBook= await AuthorModel.create(data)
    res.send({msg: savedBook})
}


module.exports.createAuthor=createAuthor



