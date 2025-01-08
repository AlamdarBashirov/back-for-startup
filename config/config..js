import mongoose from "mongoose";
// import Dotenv from 'dotenv'


// Dotenv.config()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MongoDB_URL)
        console.log("host:",connect.connection.host);
    } catch (error) {
        console.log("xeta:", error);
    }
}

export default connectDB