import User from "../models/UserSchema.js"
import Doctor  from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const register = async (req,res) =>{

    const {email,password,name,role,photo,gender}  = req.body
    try {
     
        let user = null
        if(role==="patient"){
            user = User.findOne({email})
        }
        else if (role==="doctor"){
            user = Doctor.findOne({email})
        }
        // check if user exists

        if(user){
            return res.status(400).json({message:"User already exist"})
        }
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword  = await bcrypt.hash(password,salt)

    } catch (err) {
        
    }
};
export const login = async (req,res) =>{
    try {
        
    } catch (err) {
        
    }
}