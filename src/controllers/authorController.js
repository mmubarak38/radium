const AuthorModel = require("../models/authorModel")

const createAuthor = async function(req, res) {
    var authorData = req.body
    let savedData = await AuthorModel.create(authorData)
    res.send({ data: savedData })
}


const getAuthor = async function(req, res) {
    let allAuthor = await AuthorModel.find()
    res.send({ data: allAuthor })
}

module.exports.createAuthor = createAuthor
module.exports.getAuthor = getAuthor