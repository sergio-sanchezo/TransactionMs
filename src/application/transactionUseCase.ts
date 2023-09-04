import { TransactionRepository } from "../domain/transaction.repository";
import { TransactionValue } from "../domain/transaction.value";

export class TransactionUseCase {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  public chargeAccount = async (transaction: TransactionValue) => {
    const transactionValue = new TransactionValue(transaction);
    const transactionCreated =
      await this.transactionRepository.chargeTransaction(transactionValue);
    return transactionCreated;
  };

  public makeTransactionP2P = async (transaction: TransactionValue) => {
    const transactionValue = new TransactionValue(transaction);
    const transactionCreated =
      await this.transactionRepository.transferTransaction(transactionValue);
    return transactionCreated;
  };

  public getDetailTransaction = async (id: string) => {
    const transaction = await this.transactionRepository.getTransactionById(id);
    return transaction;
  };

  public listTransactions = async () => {
    const transactions = await this.transactionRepository.listTransactions();
    return transactions;
  };
}
