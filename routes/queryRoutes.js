import express from "express";
import {
    deleteQuery,
    getQueries,
    postQuery,
} from "../controllers/queryController.js";
import verifyToken from "../middleware/loginMiddleware.js";

const router = express.Router();

router.route("/")
    .get(verifyToken, getQueries)
    .post(postQuery);

router.route("/:id")
    .delete(verifyToken, deleteQuery);

export default router;
