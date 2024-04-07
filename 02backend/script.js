// express generator ek folder banak kar deta hai, it means you don't have to give time make folder 
// so express gen. give you all files in this folder

// steps to use espress generator
// 

const express = require('express')
const app = express();
const port = 3000;

app.set("view engine","ejs")

app.use(express.static("./public"))

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

