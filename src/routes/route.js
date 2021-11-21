const express = require('express');
const router = express.Router();


const commonMid = require("../middleware/middleware")
const cmController = require("../controller/cmController")

router.get('/middleware', commonMid.middleware1, cmController.midware)

module.exports = router;

