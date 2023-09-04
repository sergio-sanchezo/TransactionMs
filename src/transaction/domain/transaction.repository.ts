import { TransactionEntity } from "./transaction.entity";

export interface TransactionRepository {
  listTransactions(): Promise<TransactionEntity[] | null>;
  getTransactionById(id: string): Promise<TransactionEntity | null>;
  chargeTransaction(transaction: TransactionEntity): Promise<TransactionEntity>;
  transferTransaction(
    transaction: TransactionEntity
  ): Promise<TransactionEntity>;
  updateTransaction(
    id: string,
    transaction: TransactionEntity
  ): Promise<TransactionEntity | null>;
}
