const PublisherModel = require("../models/publisherModel")

const createPublisher = async function(req, res) {

    var publisherdata = req.body
    let savedData = await PublisherModel.create(publisherdata)
    res.send({ msg: savedData })

}

module.exports.createPublisher = createPublisher