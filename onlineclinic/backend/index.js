import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/users.js"
import doctorRoute from "./Routes/doctors.js"

dotenv.config();

const app = express();
const dbConnect = async ()=>{

    try {
     await mongoose.connect(process.env.DBURL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("mongodb connected ")
        
    } catch (err) {
        console.log("failed to connected")
        
    }
}

const port = process.env.PORT || 8010

const corsOptions = {
    origin:true
}

app.get('/', (req,res)=>{
    res.send("api is working")
});
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)

app.listen(port,()=>{
    dbConnect()
    console.log("the server is running" + port)
});




