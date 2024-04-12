var express = require('express');
var router = express.Router();
const userModel = require('./users');
const users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/failed',(req,res)=>{
      //  agar lohin hojaaye to login page ke baad profile page dikhaado
      // agar naa ho to fir, mujhe is route se kisi aur routr lejao jaise ki /error and waha par dikhao failed 
      // but hmm kisi route ka data dusre data me use hi kr skte


      // so flash messgae aapko ye aalow kete hai ki aap is route mein bane huye data ko doosre route
      req.flash("age",12);
      res.send("bangaya")
})

router.get('/checkkaro',(req,res)=>{
     console.log(req.flash("age"))
     res.send("check karlo backend ke terminal par ")
})

router.get('/create', async(req,res)=>{
   let userData =  await userModel.create({
      username:"Nishaaa",
      nickname:"Nisu",
      description:"Nisha i to0 cute",
      categories:['fashion','explore ','place ghumna','mje krna  '],

    });
    res.send(userData)
});

router.get('/find',async( req, res)=>{
  
// ^----$ in dono ke beech me jo hoga vesa hi search hoga kwl
        var regex = new RegExp("^nishaaa$",'i')
         let user = await userModel.find({username:regex})
         res.send(user);
})

router.get('/find2', async(req,res)=>{
     let user = await userModel.find({categories:{$all: ["node"]}});
     res.send(user);
})


module.exports = router;

