// var express = require('express');
// var router = express.Router();
// const userModel = require("./users")

// /* GET home page. */
// router.get("/",(req,res)=>{
//      res.render("index")
// });

// router.get("/create",async (req,res)=>{
//    const createdUser =  await userModel.create({
//           username:"sushil",
//           age:24,
//           name:"sushil"
//      });
//      res.send(createdUser);

// });

// router.get("/allusers", async (req,res)=>{
//    let allUsers =  await userModel.find()
//    res.send(allUsers)
// //    giveresulys in array 
// })

// router.get("/allusers", async (req,res)=>{
//        let allUsers = await userModel.findOne({username:"sushil"});
//        res.send(allUsers);
// })


// router.get("/delete",async (req,res)=>{
//        let deleteUSer = await userModel.findAndDelete({
//           username:"sushil;"
//        });
//        res.send(deleteUSer)
// })




// module.exports = router;



var express = require('express');
var router = express.Router();


router.get("/",(req,res)=>{
     res.cookie("age",25)
     res.send("index")
});


router.get("/read",(req,res)=>{
     res.send(req.cookies.age);
     res.cookie("checked")
})

router.get("/delete",(req,res)=>{
    res.clearCookie("age"),
    res.send("clear ho gyi")
})


// router.get("/",(req,res)=>{
//      req.session.banned = true;
//      res.render("index")
// })

// router.get("/checkban",(req,res)=>{
//      console.log(req.session);
//      res.send("check kiya h console dekho")
// })

// router.get("/removeban",(req,res)=>{
//      req.session.destroy((error)=>{
//           if(error){
//                throw error;
//           }
//           console.log(error);
//           res.send("session remove kiya h console dekho")
//      })
// })

module.exports = router;