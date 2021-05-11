const axios = require('axios');

const { Router } =require('express');
const router = Router();

router.get("/",async(req,res)=>{
    try{
        let resp=await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tlaquepaque&appid=22f184c52b36ca768a1746bcea2fb9b0&units=metric')
        let x=resp.data.main.temp
        res.send(x.toString())
    }catch(error){
        console.log(error);
    }
    
})
module.exports = router;