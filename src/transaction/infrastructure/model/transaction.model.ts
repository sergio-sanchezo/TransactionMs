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
  receiverAccountId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  senderAccountId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

Transaction.belongsTo(Account, {
  foreignKey: 'senderAccountId',
});

Transaction.belongsTo(Account, {
  foreignKey: 'receiverAccountId',
});

