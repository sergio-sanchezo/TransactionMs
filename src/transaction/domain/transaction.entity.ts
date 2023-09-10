export interface TransactionEntity {
  id: string;
  amount: number;
  description?: string;
  receiverId: string;
  senderId: string;
  type: string;
  status: string;
}
