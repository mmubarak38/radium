const express = require('express');
const router = express.Router();


const bookmodel1 = require("../models/bookmodel1")
const AuthorModel = require("../models/authorModel")

const BookController= require("../controllers/bookController")
const AuthorController= require("../controllers/authorController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
           //End points to creat books  and authors

router.post('/createNewBook', BookController.createBook);
 router.post('/createAuthor', AuthorController.createAuthor);
           
           
router.get('/newBookList', BookController.bookList);

router.get('/changeprice', BookController.newPrice);

router.get('/searchByPrice', BookController.searchPrice);



module.exports = router;