import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "failed" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: true, message: "failed" });
  }
};
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({ success: true, message: "user found", data: user });
  } catch (err) {
    res.status(404).json({ success: true, message: "user not found" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res
      .status(200)
      .json({ success: true, message: "users found", data: users });
  } catch (err) {
    res.status(404).json({ success: true, message: " Not found" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return;
      res.status(404).json({ success: false, message: "user not found" });
    }

    const { password, ...rest } = user._doc;
    res
      .status(200)
      .json({
        success: true,
        message: "profile info successful",
        data: { ...rest },
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};
export const getMyAppointments = async(req,res)=>{
  try {
    // retrieve appointments from booking
    const bookings = await Booking.find({user:req.userId})

    //extract doctors id 
    const doctorIds = bookings.map(el=>el.doctor.id)

    //retrieve doctor using ids
    const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')

    res.status(200).json({success:true,message:"getting appointments",data:doctors})
    
  } catch (err) {
    
    res.status(500).json({ success: false, message: "something went wrong" });
  }
}