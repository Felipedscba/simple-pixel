import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Track extends Model {
    declare id: number;
    declare domain: string;
    declare path: string;
    declare query: string;
    declare customPayload: object;
    declare createdAt: Date;
}

Track.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        query: {
            type: DataTypes.JSON,
            allowNull: true
        },
        customPayload: {
            type: DataTypes.JSON,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: "tracks"
    }
);
