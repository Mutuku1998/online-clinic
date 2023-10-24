
import User from "../models/UserSchema.js"

export const updateUser =  async (req,res)=>{

   const id = req.params.id
   try {
    const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
    res.status(200).json({success:true, message:"successfully updated",data:updateUser})

   } catch (err) {
    res.status(500).json({success:true, message:"failed"})
   }

}
export const deleteUser =  async (req,res)=>{

    const id = req.params.id
    try {
    await User.findByIdAndDelete(id)
     res.status(200).json({success:true, message:"deleted successfully"})
 
    } catch (err) {
     res.status(500).json({success:true, message:"failed"})
    }
 
 }
 export const getSingleUser =  async (req,res)=>{

    const id = req.params.id
    try {
     const user = await User.findById(id)
     res.status(200).json({success:true, message:"user found",data:user})
 
    } catch (err) {
     res.status(404).json({success:true, message:"user not found"})
    }
 
 }