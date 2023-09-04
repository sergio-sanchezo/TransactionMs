import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "password",
});

export const dbInit = async () => {
  try {
    await sequelize.sync({ force: true });
    // await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
