import Admin from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

// @desc Authenticate admin
// @route POST /api/admin/login
// @access Public
const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (!admin || !await bcrypt.compare(password, admin.password)) {
            return res.status(200).json({
                message: "Invalid credentials",
                success: false,
            });
        }

        const token = generateToken(admin);

        res.cookie("token", token, {
            httpOnly: false,
            withCredentials: true,
            sameSite: "None",
            secure: true,
            maxAge: 60 * 60 * 1000, // 1 hour
        });

        res.status(200).json({
            message: "Login successful",
            success: true,
            token: token,
        });
    } catch (err) {
        console.error(`Error during login: ${err.message}`);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default loginAdmin;
