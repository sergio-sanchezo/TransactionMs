import { DataTypes } from "sequelize";
import sequelize from "../../../database/database";
import { AccountModel } from "../../../account/infrastructure/model/account.model";

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
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  senderId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

AccountModel.hasMany(TransactionModel);
TransactionModel.belongsTo(AccountModel);
