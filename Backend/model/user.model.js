const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
       fullname:  {
        firstname:{
              type:String,
              require:true,
              minlength:[3,'give more than 3 length']
        },
        lastname:{
              type:String,
              require:true,
              minlength:[3,'give more than 3 length']
        }
       },
       email:{
              type:String,
              require:true,
              unique:true,
              minlength:[3,'give email length more than 3']
       },
       password:{
              type:String,
              require:true,
              select:false
       },
       socketId:{
              type:String
       },

})


userSchema.methods.generateAuthToken = function(){
       const token = jwt.sign({ _id: this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
       return token;
}

userSchema.methods.comparePassword = async function(password){
       return await bcrypt.compare(password,this.password);
       
}

userSchema.statics.hashedPassword = async function(password){
       return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('user',userSchema);


module.exports = userModel;                                  


