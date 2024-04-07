var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// install mongodb
// install mongoosejs
// require and setup connection
// make schema
// create model and export


const mongoose = require("mongoose");

mongoose.connect("mongidb://127.0.0.1:27017/backend01")

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  age:Number
})


module.exports = mongoose.model("user",userSchema);

