const loggerObj = require('./logger')
const helperObj = require('./util/helper')
const formatterObj = require('../src/validator/formatter')
const _= require('lodash')



loggerObj.logMessage(' Mubarak Ansari')
loggerObj.printWelcomeMessage()
console.log(loggerObj.loggerEndpoint)

console.log("_____________________________")
//helper.js
helperObj.currentDate()  
helperObj.currentMonth()
helperObj.aboutBatch()

console.log("________________________________")

// formatter.js
formatterObj.trimInput ()
formatterObj.changeToLowerCase ()
formatterObj.changeToUpperCase ()


console.log("________________________________")



console.log(_.chunk(['january', 'february', 'march', 'april', 'may', 'june', 'july','august', 'september', 'october', 'novermber', 'december'], 3));


const arr= [1,3,5,7,9,11,13,15,17,19]
console.log(_.tail(arr));


console.log(_.union([12,15,16],[13,16,55,47],[74,55,11,45]))

let f1=["Name","Mubarak Ansari"]

let f2 = ["Age","25"]

let f3=["city","jaipur"]

let f4=["email","abc@gmail.com"]

console.log(_.fromPairs([f1,f2,f3,f4]));


