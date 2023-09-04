export interface TransactionEntity {
  id: string;
  amount: number;
  description: string;
  date: Date;
  type: string;
  receiverId: string;
  senderId: string;
}
