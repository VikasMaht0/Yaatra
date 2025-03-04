const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minlength:[3,'Firstname must be at least 3 character long'],
        },
        lastname:{
            type:String,
            minlength:[3,'Lirstname must be at least 3 character long'],
        },
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
       
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{  
            type:String,
            require:true,
            minlength: [3,'Color must be at least 3 character long']
        },
        plate:{
            type:String,
            require:true,
            minlength: [3,'Plate must be at least 3 character long']
        },
        capacity:{
            type:Number,
            require:true,
            min: [3,'Capacity must be at least 3 character long']
        },
        vehicleType:{
            type:String,
            require:true,
            enum:['car','motorcycle','auto']
        }
   },
   location:{
    lat:{
        type:Number,
    },
    lng:{
        type:Number,
    }
   }
})


captainSchema.methods.generateAuthToken = function(){
         const token = jwt.sign({ _id: this._id},process.env.JWT_SECRET,{ expiresIn:'24h' });
            return token;
}

captainSchema.methods.comparePassword = async function(){
         return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}




const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;