import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import trackRoutes from "./routes/trackRoutes.js";
import { sequelize } from "./config/database.js";

dotenv.config();

const app = express();

// Habilita CORS para qualquer domínio
app.use(cors());

// Parse JSON
app.use(express.json());

// Rotas
app.get("/", (_, res) => res.json({ message: "Welcome to the Tracking API" }));
app.get("/api", (_, res) => res.json({ message: "API is running" }));
app.use("/api", trackRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
