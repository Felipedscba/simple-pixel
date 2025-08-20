import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export async function up() {
    await sequelize.getQueryInterface().createTable("tracks", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        domain: { type: DataTypes.STRING, allowNull: false },
        path: { type: DataTypes.STRING, allowNull: false },
        query: { type: DataTypes.STRING, allowNull: true },
        customPayload: { type: DataTypes.JSON, allowNull: true },
        createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() }
    });
}

export async function down() {
    await sequelize.getQueryInterface().dropTable("tracks");
}
