const jwt = require["jsonwebtoken"];

const authenticate = function (req,res,next){
    try{
        let authToken = req.headers['x-auth-token'];
        if (!authToken) {
        res.status(400).send({status: false, message: "Mandatory authentication header missing"});
        }
        else{
            let decodedToken = jwt.verify(authToken,"Radium");
            if(decodedToken){
                req.user= decodedToken
                console.log("Token", decodedToken)
                next();
            } else {
                res.status(401).send({ status: false, message:"Invalid token"});
            }
        }
    } catch (error){
        res.status(500).send({ status: false, message: error.message});
    }
};




module.exports.authenticate = authenticate;