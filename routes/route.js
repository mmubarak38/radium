const express = require('express');

const router = express.Router();

router.get('/test-me', function(req, res) {
    res.send('My first api hello lnndankjnfdkjnvdfsnfdsn')
})


//problem 1

router.get('/movie', function (req, res ){
    let movie = ["dhoom","batman","superman","queen"]
    res.send(movie)

})
//problem 2



router.get('/movies/:moviesIndex', function (req, res ){
    let movies = ["dhoom","batman","superman","queen"]
    let index = req.params.moviesIndex
   // let moviesAtindex = movies[index]
  //  res.send = moviesAtindex

    index >= (movies.length-1) ? res.send("Eror-Enter valid index"): res.send(movies[index])
    
})


//problem 3


router.get('/film', function (req , res ){
    const film = [{ "id": 1, "name": "The Shining"}, { "id": 2, "name": "Incendies"}, { "id": 3, "name": "Rang de Basanti"}, {"id": 4, "name": "Finding Nemo"}]
res.send(film)
})

// problem 4


router.get('/movies1/:index', function (req, res) {
    let array=[{
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
    const value=req.params.index
    let no=0
    for(let i=0;i<array.length;i++){
        if(array[i].id==value)
        {
            res.send(array[i])
            no=1
            break
        }
     }
     if(no==0)
     res.send("invalid no")
});




module.exports = router;