import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({email:email})
    if(checkUser){
      
      return res.json({success:false, message:"User with this email already exists"})}
    
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ userName, email, password: hashPassword });

    await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some Error Occured",
    });
  }
};

const loginUser = async(req,res) =>{
  const {email,password} = req.body  
  try {
  const checkUser = await User.findOne({email})
  if (!checkUser) {
      return res.json({message:"no user found", success:false})
  }
const checkPasswordMatched = bcrypt.compare(password,checkUser.password)
if(!checkPasswordMatched)return res.json({message:"Incorrect password", success:false})

  const token = jwt.sign({id:checkUser._id, role:checkUser.role, email:checkUser.email},process.env.CLIENT_SECRET_KEY,{expiresIn:"60m"})

  res.cookie('token',token,{httpOnly:true,secure:false}).json({message:"Logged in successfully",success:true,
    user:{
      id:checkUser._id,
      role:checkUser.role,
      email:checkUser.email
    }
  })

} catch (error) {
  res.json({message:error.message, success:false})
}
}

const logoutUser = (req,res)=>{
 res.clearCookie('token').json({
  message:"Logged Out Successfully",
  success:true
 })
}

const authMiddleware = async(req,res,next)=>
{
    const token = req.cookies.token
    if(!token){
      res.status(401).json({
        message:"unauthorized user",
        success:false
      })
    } 
    try {
      const decode = jwt.verify(token,process.env.CLIENT_SECRET_KEY)
      req.user = decode

    } catch (error) {
      res.status(401).json({success:false,message:"unauthrized user"})
    }
}

export { registerUser , loginUser, logoutUser, authMiddleware};
