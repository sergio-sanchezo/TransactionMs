import { TransactionEntity } from "../../domain/transaction.entity";
import { TransactionRepository } from "../../domain/transaction.repository";
import { TransactionModel } from "../model/transaction.schema";

export class SequelizeRepository implements TransactionRepository {
  async listTransactions(): Promise<any> {
    const transactions = await TransactionModel.findAll();
    return transactions;
  }

  async getTransactionById(id: string): Promise<any> {
    const transaction = await TransactionModel.findByPk(id);
    return transaction;
  }

  async chargeTransaction(transaction: TransactionEntity): Promise<any> {
    const transactionCreated = await TransactionModel.create({ transaction });
    return transactionCreated;
  }

  async transferTransaction(transaction: TransactionEntity): Promise<any> {
    const transactionCreated = await TransactionModel.create({ transaction });
    return transactionCreated;
  }

  async updateTransaction(
    id: string,
    transaction: TransactionEntity
  ): Promise<any> {
    const transactionUpdated = await TransactionModel.update(transaction, {
      where: { id },
    });
    return transactionUpdated;
  }
}
