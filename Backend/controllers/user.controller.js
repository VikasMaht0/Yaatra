const userModel =require('../model/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blackListTokenModel = require('../model/blacklistToken.model')



module.exports.registerUser = async(req,res,next)=>{
       
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:error.array()});
    }
    console.log(req.body)

const { fullname,email,password} = req.body;

 //if user already exist then return error
 const isUserAlreadyExist = await userModel.findOne({email});
 if(isUserAlreadyExist){
     return res.status(400).json({message:'Captain already exist'});
 }

const hashedPassword = await userModel.hashedPassword(password);

const user = await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashedPassword
})

const token = user.generateAuthToken();

res.status(201).json({token,user})

}

module.exports.loginUser = async(req,res)=>{
        
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()});
         }

         const {email,password} = req.body;

         const user = await userModel.findOne({email}).select('+password');  //using .select('+password') se vo password bhi leke aega database se

         if(!user){
            return res.status(401).json({message:'Invalid email or password'});
         }

         const isMatch = await user.comparePassword(password);

         if(!isMatch){
            return res.status(401).json({message:'Invalid email or password'});
         }

         const token = user.generateAuthToken();

         res.cookie('token',token);

         res.status(200).json({token,user});
}    

module.exports.getUserProfile = async(req,res)=>{

    res.status(200).json(req.user);
}


module.exports.logoutUser = async(req,res)=>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split('')[1];

    await blackListTokenModel.create({token});

    res.status(200),json({message:'Logged Out'});
}