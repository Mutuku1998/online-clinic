import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import cors from "cors";
import authRoutes from "./Routes/auth.js"

dotenv.config();
const app = express();

const port = process.env.PORT || 8080;

const corsOptions = {
    origin: true
};

//database connection

const connectDb =  async()=>{
    try {
        await mongoose.connect(process.env.DBURL,{
            useNewUrlParser:true,
            useUnifiedTopology:true

        })
        console.log("database connected successfully")
    } catch (err) {
        console.log("database not connected")
    }
}

app.get("/", (req, res) => {
    res.send("Api is working");
});

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoutes);


app.listen(port, () => {
    connectDb()
    console.log(`Server is running on port ${port}`);
});
