import { Request, Response } from "express";
import { TransactionUseCase } from "../../application/transactionUseCase";

export class TransactionController {
  constructor(private readonly transactionUseCase: TransactionUseCase) {}

  public getCtrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transaction = await this.transactionUseCase.getDetailTransaction(id);
    res.status(200).json(transaction);
  };

  public postChargeCtrl = async (req: Request, res: Response) => {
    const transaction = await this.transactionUseCase.chargeAccount(req.body);
    res.status(200).json(transaction);
  };

  public postP2PCtrl = async (req: Request, res: Response) => {
    const transaction = await this.transactionUseCase.makeTransactionP2P(
      req.body
    );
    res.status(200).json(transaction);
  };

  public listTransactionsCtrl = async (req: Request, res: Response) => {
    const transactions = await this.transactionUseCase.listTransactions();
    res.status(200).json(transactions);
  };
}
