const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.render("index")
})

router.get("/validate",(req,res)=>{
    const table= req.query.table
    const password= req.query.password
    //if()
    res.redirect("http://localhost:3000/menu")
    //res.send("index now")
})


module.exports = router;
