import { Sequelize } from "sequelize";
import { config } from "../config";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: config.db.host || "localhost",
  username: "postgres",
  password: config.db.password || "password",
});

export const dbInit = async () => {
  try {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("[DB] Connection has been established successfully.");
  } catch (error) {
    console.error("[DB] Unable to connect to the database:", error);
  }
};

export default sequelize;
