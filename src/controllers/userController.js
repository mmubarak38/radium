const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')



 const createUser= async function (req, res) {
    try{
      let userCredentials = req.body
      let savedData= await userModel.create(userCredentials)
      res.status(200).send({ status:true, data: savedData}); 
    } catch (error) {
        res.status(500).send({ status: false, message: error.message});
    }  
 }; 

const userlogin = async function (req, res) {
    try {
        userName = req.body.name
        userPassword = req.body.password
    
        let user = await userModel.findOne({ name: userName, password: userPassword, isDeleted: false })
        if (user) {
            const generatedToken = jwt.sign({ userId: user._id }, "Radium")
            res.status(200).send({ status: true, data: user._id, token: generatedToken })
        } else {
            res.status(400).send({ status: false, message: 'Invalid user credentials' })
        }
    } catch(error){
        res.send(500).send({status:false, message:error.message})
        }
}


const getUserDetails = async function (req, res) {
    try {
        let userId = req.params.userId
        let decodedUserToken = req.user;
        if (userId == decodedUserToken.userId) {
            let userDetails = await userModel.findOne({ _id: userId, isDeleted: false });
        if (userDetails) {
            res.status(200).send({ status: true, data: userDetails })
        } else {
            res.status(400).send({ status: false, message: 'User not found' })
        }
     
}
else res.status(400).send({ status: false, message: "error un-authorised user" })
  }  catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const updateEmail = async function (req, res) {
    try {
        let userId = req.params.userId
        let emailId = req.body.email
        let decodedUserToken = req.user;
      if (userId == decodedUserToken.userId) {
         let userDetails = await userModel.findOneAndUpdate({ "_id": userId }, { "emailId": emailId }, { new: true })
    
          if (user) {
            res.status(200).send({ status: true, data: userDetails })
        } else {
            res.status(400).send({ status: false, message: 'User not found' })
        }
    } else res.status.send({ status: false, message: "error un-authorised user", });
} catch (error) {
    res.send(500).send({ status: false, message: error.message })
}
};



module.exports.createUser = createUser
module.exports.userlogin = userlogin
module.exports.getUserDetails = getUserDetails
module.exports.updateEmail = updateEmail
