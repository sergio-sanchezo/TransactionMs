import { TransactionEntity } from "./transaction.entity";
import { v4 as uuid } from "uuid";

export class TransactionValue implements TransactionEntity {
  id: string;
  amount: number;
  description: string;
  date: Date;
  receiverId: string;
  senderId: string;

  constructor({
    amount,
    description,
    date,
    receiverId,
    senderId,
  }: {
    id: string;
    amount: number;
    description?: string;
    receiverId: string;
    senderId: string;
    date: Date;
  }) {
    this.id = uuid();
    this.amount = amount;
    this.description = description ?? "default";
    this.receiverId = receiverId;
    this.senderId = senderId;
    this.date = date;
  }
}
