const { Router } =require('express');
const router = Router();
const authCRUDCtrl = require('../controllers/auth.crud.controller')
const jwt = require('jsonwebtoken')

router.post('/signup-crud',authCRUDCtrl.signUp);
router.post('/signin-crud',authCRUDCtrl.signIn);


async function verifyToken(req,res,next){
    try{
        if(!req.headers.authorization){
            return res.status(401).send('Unthorize Request');
        }
    
        const token = req.headers.authorization.split(' ')[1]
    
        if(token ==='null'){
            return res.status(401).send('uhathorize Request');
        }
    
        const payload = await jwt.verify(token,process.env.SECRET);
        if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
        req.userId = payload._id
        next();
    }catch(e){
        return res.status(401).send('Unauhtorized Request');
    }
}

module.exports = router;