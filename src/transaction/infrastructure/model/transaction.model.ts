import { DataTypes } from "sequelize";
import sequelize from "../../../database/database";

export enum TransactionType {
  P2P = "p2p",
  CHARGE = "charge",
}

export enum TransactionStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export const TransactionModel = sequelize.define("transaction", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  receiverId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senderId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM(TransactionType.P2P, TransactionType.CHARGE),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(
      TransactionStatus.PENDING,
      TransactionStatus.COMPLETED,
      TransactionStatus.CANCELLED
    ),
    allowNull: false,
  },
});
