import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Admin from "../models/adminModel.js";

const initAdmin = async () => {
    try {
        // set username and password when creating an admin
        const username = "";
        const password = "";

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new Admin({
            username: username,
            password: hashedPassword,
        });

        await newAdmin.save();

        console.log("New admin account created");
    } catch (err) {
        console.error("Failed to create admin.");
        console.error(`Error: ${err.message}`);
    }
};

export default initAdmin;
