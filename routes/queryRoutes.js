import express from "express";
import {
    deleteQuery,
    getQueries,
    postQuery,
} from "../controllers/queryController.js";
import verifyToken from "../middleware/loginMiddleware.js";

const router = express.Router();

router.route("/")
    .get(getQueries)
    .post(postQuery);

router.route("/:id")
    .delete(deleteQuery);

export default router;
