const express = require('express');


const router = express.Router();
const coinController= require("../controller/coinController");

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/assets',coinController.getcoinslist)


module.exports = router;