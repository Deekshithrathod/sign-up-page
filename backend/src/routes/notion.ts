import express, { Request, Response } from "express";
import { addEmailNotion } from "../controllers/notion";

const router = express.Router();

router.post("/notion", addEmailNotion);

export default router;
