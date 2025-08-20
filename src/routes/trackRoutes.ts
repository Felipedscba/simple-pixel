import { Router } from "express";
import { track, getTracks } from "../controllers/trackController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = Router();

router.post("/track", track);
router.get("/get-tracks", authMiddleware, getTracks);

export default router;
