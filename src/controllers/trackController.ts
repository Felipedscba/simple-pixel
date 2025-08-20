import { Request, Response } from "express";
import { Track } from "../models/Track.js";

export async function track(req: Request, res: Response) {
    const { domain, path, queryParams, customPayload } = req.body;

    // Validação simples
    if (!domain || !path) {
        return res.status(400).json({ error: "'domain' e 'path' são obrigatórios" });
    }

    try {
        const track = await Track.create({
            domain,
            path,
            query: queryParams ? JSON.stringify(queryParams) : null,
            customPayload: customPayload || null
        });
        res.status(201).json(track);
    } catch (err) {
        res.status(500).json({ error: "Failed to track" });
    }
}

export async function getTracks(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    // Validação de paginação
    if (page < 1 || limit < 1) {
        return res.status(400).json({ error: "Parâmetros 'page' e 'limit' devem ser positivos" });
    }

    try {
        const { rows, count } = await Track.findAndCountAll({
            limit,
            offset,
            order: [["createdAt", "DESC"]]
        });

        res.json({
            page,
            total: count,
            data: rows
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch tracks" });
    }
}
