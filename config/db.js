import mongoose from "mongoose";
// import initAdmin from "../utils/initAdmin.js";

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            dbName: "CoED",
        });
        console.log(`Connected to MongoDB: ${(await conn).connection.host}`);

        // create new admin
        // initAdmin();
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
