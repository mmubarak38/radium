const express = require('express');
const router = express.Router();

const AuthorController = require("../controllers/authorController")
const BookController = require("../controllers/bookController")
const PublisherController = require("../controllers/publisherController")


router.post('/createauthor', AuthorController.createAuthor);

router.post('/createPublisher', PublisherController.createPublisher);


router.post('/createBook', BookController.createBook);


router.get('/getBook', BookController.getBook);

// router.get('/Books1 ', BookController.Books1);
    









module.exports = router;