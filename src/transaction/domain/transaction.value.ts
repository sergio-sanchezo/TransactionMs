import { TransactionEntity } from "./transaction.entity";

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
    id,
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
    this.id = id;
    this.amount = amount;
    this.description = description || "default";
    this.date = date;
    this.type = type;
    this.receiverId = receiverId;
    this.senderId = senderId;
  }
}
