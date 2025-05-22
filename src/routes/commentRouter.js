import express from "express";
import {getAllComments, getComment} from "../controllers/commentController.js";

const router = express.Router();
router.get("/", getAllComments);
router.get("/:id", getComment);

export default router;
