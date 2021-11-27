const express = require('express');
const router = express.Router();


const userController =require("../controllers/userController")
const commonMw = require("../middlewares/userMiddleware")


router.post('/createuser', userController.createUser)
router.post('/userlogin', userController.userlogin)
router.get('/users/:userId', commonMw.authenticate, userController.getUserDetails)
router.put('/users/:userId', commonMw.authenticate, userController.updateEmail)







module.exports = router;