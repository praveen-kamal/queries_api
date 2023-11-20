import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import queryRouter from "./routes/queryRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors(
    {
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    },
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/queries", queryRouter);
app.use("/api/admin", adminRouter);

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
