import { TransactionRepository } from "../domain/transaction.repository";
import { TransactionValue } from "../domain/transaction.value";
import {
  TransactionStatus,
  TransactionType,
} from "../infrastructure/model/transaction.model";
import { PaypalGateway } from "../infrastructure/services/paypal.gateway";

export class TransactionUseCase {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly PaypalGateway: PaypalGateway
  ) {}

  public createOrder = async (amount: number, userId: string) => {
    const order = await this.PaypalGateway.makePayment(amount, "USD");

    // Create a new transaction in the database with status "pending"
    const transaction = new TransactionValue({
      id: order.id,
      amount,
      receiverId: userId,
      senderId: "paypal",
      type: TransactionType.CHARGE,
      status: TransactionStatus.PENDING,
    });

    await this.transactionRepository.createTransaction(transaction);

    return order;
  };

  public captureOrder = async (token: string) => {
    const order = await this.PaypalGateway.captureOrder(token);

    // Update the transaction in the database with status "completed"
    const transactionUpdated =
      await this.transactionRepository.updateTransaction(order.id, {
        status: TransactionStatus.COMPLETED,
      });

    return transactionUpdated;
  };

  public cancelOrder = async (token: string) => {
    // Update the transaction in the database with status "cancelled"
    const transactionUpdated =
      await this.transactionRepository.updateTransaction(token, {
        status: TransactionStatus.CANCELLED,
      });

    return transactionUpdated;
  };

  public makeTransactionP2P = async (transaction: TransactionValue) => {
    const transactionValue = new TransactionValue(transaction);
    const transactionCreated =
      await this.transactionRepository.createTransaction({
        ...transactionValue,
        status: TransactionStatus.COMPLETED,
        type: TransactionType.P2P,
      });
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

  public getTransactionsByReceiverId = async (userId: string) => {
    const transactions =
      await this.transactionRepository.getTransactionsByReceiverId(userId);
    return transactions;
  };
}
