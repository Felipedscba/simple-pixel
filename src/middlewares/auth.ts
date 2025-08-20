import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"];
    if (!token || token !== `Bearer ${process.env.API_TOKEN}`) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
}
