import { Umzug, SequelizeStorage } from "umzug";
import { sequelize } from "./src/config/database.js";

const umzug = new Umzug({
    migrations: { glob: "src/migrations/*.ts" },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console
});

const command = process.argv[2];

if (command === "up") {
    await umzug.up();
} else if (command === "down") {
    await umzug.down();
}
