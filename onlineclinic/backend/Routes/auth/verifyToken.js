import jwt from "jsonwebtoken";
import Doctor from "../../models/DoctorSchema.js";
import User from "../../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  //get token from headers
  const authToken = req.headers.authorization;

  //check if token exist

  if (!authToken || !authToken.startsWith("Bearer")) {
    return;
    res
      .status(401)
      .json({ success: false, message: "no token, authoriztion denied" });
  }
  try {
    
    const token = authToken.split("")[1];
    
    //verify token
    const decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY)

    req.userId = decoded.id
    req.role = decoded.role
    
    next(); //next function
  } catch (err) {}
};
