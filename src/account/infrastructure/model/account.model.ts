import { DataTypes } from "sequelize";
import sequelize from "../../../database/database";

export const AccountModel = sequelize.define("account", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  externalUserId: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});
