const middleware1 = function(req, res, next) {
// to print the date and time
    let DATE = new Date(new Date())
    let IP = req.ip           // to print the ip address 
    let URL = req.url          // to print the route or url of endpoint
    console.log("2. Date and Time: " + DATE + "\n3. IP Address: " + IP + "\n4. API Url: " + URL);
    next()
}


module.exports.middleware1 = middleware1