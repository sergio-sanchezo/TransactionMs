import { TransactionEntity } from "./transaction.entity";
import { v4 as uuid } from "uuid";

export class TransactionValue implements TransactionEntity {
  id: string;
  amount: number;
  description: string;
  receiverId: string;
  senderId: string;
  type: string;
  status: string;

  constructor({
    id,
    amount,
    description,
    receiverId,
    senderId,
    type,
    status,
  }: {
    id: string;
    amount: number;
    description?: string;
    type: string;
    receiverId: string;
    senderId: string;
    status: string;
  }) {
    this.id = id || uuid();
    this.amount = amount;
    this.description = description ?? "";
    this.type = type;
    this.receiverId = receiverId;
    this.senderId = senderId;
    this.status = status;
  }
}
