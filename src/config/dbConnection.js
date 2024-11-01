import mongoose from "mongoose";

const dbConnection = async () => {
    if (mongoose.connection.readyState >= 1) {
        return console.log("mongodb is Already Connected!");
    }
    try {
        // await mongoose.connect(process.env.DB_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb is Now Connected");
    } catch (error) {
        console.log(error, "Error From Mongodb Connection Error");
    }
};

export default dbConnection;