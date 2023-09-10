import { TransactionEntity } from "./transaction.entity";

export interface TransactionRepository {
  listTransactions(): Promise<TransactionEntity[] | null>;
  getTransactionById(id: string): Promise<TransactionEntity | null>;
  createTransaction(transaction: TransactionEntity): Promise<TransactionEntity>;
  updateTransaction(
    id: string,
    transaction: Partial<TransactionEntity>
  ): Promise<TransactionEntity | null>;
  getTransactionsByReceiverId(
    userId: string
  ): Promise<TransactionEntity[] | null>;
}
