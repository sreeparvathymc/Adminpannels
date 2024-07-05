

// setInterval(function (){
//     console.log("Node js")
// }, 1000);


// setTimeout(() => {
//     console.log("node js")
// }, 500);


// var os = require('os')
// console.log(os.networkInterfaces());



// var fs = require('fs')
// fs.readFile("./text.txt", "utf-8", function (err, data){
//     if(err){
//         console.error(err);
//     }
//     console.log(data);
// });





// create file

// const fs = require('fs');
// fs.writeFile(
//     "newss.txt",
//     "This is a new file created by node js",
//     (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("File Created");
//  });



// append file

// const fs = require('fs');
// fs.appendFile(
//     "newss1.txt",
//     "This is a new file created by node js",
//     (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("File Created");
//  });



// Rename Files

// const fs = require('fs');
// fs.rename("./text.txt", "./sample.txt", (err) => {
//     if(err){
//         console.log("err")
//     }
//     console.log("file renamed")
// });




// Delete file

// const fs = require('fs');

// fs.unlink('./newss.txt', (err) =>{
// if(err){
//    console.log(err) 
// }
// console.log("file deleted");
// });



// path module


// var Calc = require("./calc.js")

// console.log(Calc.prod(10,20))

// var express = require("express");
// var Express = require("express");
// var bodyParser = require("body-parser")
// var app = express();

// app.listen(8000)

// middleware
// app.use(function(req,res,next){
//     next();
// })
 
// app.use(bodyParser.urlencoded({ extended: false }))

// app.get("/",function(req,res){
//     console.log(req);
//     res.send("index page");
// });


// app.get("/about",function(req,res){
//     res.send("about page");
// });

// app.get("/student",function(req,res){
//     res.send(req.query);


// });

// app.post("/login",function(req,res){
//     res.send(req.body.name);
// });


// var profiles = {
//    "1" : {name:'anil',age:30},
//    "2" : {name:'bimal',age:20},
//    "3" : {name:'sanju',age:30},
// }


// app.get("/profile/:id",function(req,res){
// res.send(req.params.id);
// res.write("profile of" + current_profile.name)

// })