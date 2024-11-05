import mongoose from "mongoose";

const UserSchema  = new mongoose.Schema({
userName:{
    type:String,
    required:true,
    unique:true,
    maxlength:30,
},
email:{
    type:String,
    required:true,
    unique:true,
    validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Invalid email address format',
      },
},
password:{
    type:String,
    required:true,
    minlength:8,
},
role:{
    type:String,
    default:'user',
    enum:['user','admin']
}
});

const User  = mongoose.model('User',UserSchema)

export default User;

