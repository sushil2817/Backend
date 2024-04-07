const express = require('express');
const app = express();

app.set("view engine","ejs")

app.use(express.static('./public'));

// app.use((req,res,next)=>{
//     console.log('Middleware working');
//     next();
// });

app.get('/',(req,res)=>{
    res.render("index",{age:12});
})
app.get('/contact',(req,res)=>{
    res.render("contact",{age:14});
})

app.get("/error",(req, res, next)=>{
     throw Error("Something went wrong")
})

app.get('/profile/:username',(req,res)=>{
    res.render(`hello ${req.params.username}`);
})


app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})




app.listen(3000);