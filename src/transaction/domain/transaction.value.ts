import { TransactionEntity } from "./transaction.entity";
import { v4 as uuid } from "uuid";

enum TransactionType {
  CHARGE = "CHARGE",
  P2P = "P2P",
}

export class TransactionValue implements TransactionEntity {
  id: string;
  amount: number;
  description: string;
  date: Date;
  type: TransactionType;
  receiverId: string;
  senderId: string;

  constructor({
    amount,
    description,
    date,
    type,
    receiverId,
    senderId,
  }: {
    id: string;
    amount: number;
    description?: string;
    date: Date;
    type: TransactionType;
    receiverId: string;
    senderId: string;
  }) {
    this.id = uuid();
    this.amount = amount;
    this.description = description ?? "default";
    this.date = date;
    this.type = type;
    this.receiverId = receiverId;
    this.senderId = senderId;
  }
}
