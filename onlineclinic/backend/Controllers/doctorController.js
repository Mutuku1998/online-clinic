import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Doctor successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update doctor" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Doctor deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete doctor" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");
    if (!doctor) {
      res.status(404).json({ success: false, message: "Doctor not found" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "Doctor found", data: doctor });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch doctor" });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const query = req.query.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          {
            name: { $regex: query, $options: "i" },
          },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }
    res
      .status(200)
      .json({ success: true, message: "Doctors found", data: doctors });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctors" });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ success: false, message: "Doctor not found" });
    } else {
      const { password, ...rest } = doctor._doc;
      const appointments = await Booking.find({ doctor: doctorId });
      res.status(200).json({
        success: true,
        message: "Doctor profile info retrieved successfully",
        data: { ...rest, appointments },
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctor profile" });
  }
};
