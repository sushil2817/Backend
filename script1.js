// node js hai khoob sara C++ ka code jo ki liya gaya hai chrome browser ke v8 enginge ke code se aur is c++ code jisko liya gaya usey wrap kar diya gaya js code se and ye hume allow krta hai ke hum js code likhein aur ye js code accept karega and c++ ke basis par aapko ek server environment bana kar dega, par sirf tab tk jab tk, jab tak ye code chlega

// npm => node package manager // nan and paneer makhnee
// npm ek jgh h jha pr bhut sare package milte hai
// package -> bani banaai cheejein/ features khlate hai packages


// express framework for node.js
// express ka use cae => routing
// routing =>    (GET - POST) for interview remember other one also PUT PATCH DELETE
                 // /profile = profile
                 // /contact = contact
                 // /li




// var chahca = require('./script2')


// var oneLinerJoke = require('one-liner-joke');

// var getRandoomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandoomJoke);

// var figlet = require("figlet");

// figlet("Sushil loves Coding", (err,data)=>{
//     if(err){
//         console.log("Something went wrong...");
//         console.log(err);
//         return;
//     }else{
//         console.log(data);
//     }
// })

// var a = 12;
// var b = 12;
// var c = 12;

// console.log(a);


// -----------------  express -------- 
const express = require('express')

const app = express();

const port = 3000


// rout chalne se jo bhi chalta h usko middleware bolte hai

// sb req. ke phle chala skte hai
// if middleware chl jata h to req. jam ho jati h to next req. nhi chl pati h

// -------middleware
app.use ((req,res,next)=>{
      console.log('Hello from middleware');
      next();
})
app.use ((req,res,next)=>{
      console.log('Hello from middleware2');
      next();
})

app.get('/profile',(req,res)=>{
    res.send('Sushil Loves NISHA')
    res.send('Sushil Loves NISHA')
})

app.listen(port,()=>{
    console.log(`Server port listening on port ${port}`);
})



