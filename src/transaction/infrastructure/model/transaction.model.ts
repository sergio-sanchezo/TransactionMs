import { DataTypes } from "sequelize";
import sequelize from "../../../database/database";

export const TransactionModel = sequelize.define("transaction", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  senderAccountId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
