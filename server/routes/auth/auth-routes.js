
import express from "express";
import { loginUser, registerUser,logoutUser, authMiddleware } from "../../controllers/auth/auth-controller.js";

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
router.route('/check-auth').get(authMiddleware, (req,res)=>{
    const user = req.user;
    res.status(200).json({
        success:true,
        message:"Authenticated user",
        user,

    })
})

export default router