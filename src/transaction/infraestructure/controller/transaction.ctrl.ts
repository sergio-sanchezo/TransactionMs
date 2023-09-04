import { Request, Response } from "express";
import { TransactionUseCase } from "../../application/transactionUseCase";

export class TransactionController {
  constructor(private readonly transactionUseCase: TransactionUseCase) {
    this.getCtrl = this.getCtrl.bind(this);
    this.postChargeCtrl = this.postChargeCtrl.bind(this);
    this.postP2PCtrl = this.postP2PCtrl.bind(this);
    this.listTransactionsCtrl = this.listTransactionsCtrl.bind(this);
  }

  public async getCtrl(req: Request, res: Response) {
    const { id } = req.params;
    const transaction = await this.transactionUseCase.getDetailTransaction(id);
    res.status(200).json(transaction);
  }

  public async postChargeCtrl(req: Request, res: Response) {
    const transaction = await this.transactionUseCase.chargeAccount(req.body);
    res.status(200).json(transaction);
  }

  public async postP2PCtrl(req: Request, res: Response) {
    const transaction = await this.transactionUseCase.makeTransactionP2P(
      req.body
    );
    res.status(200).json(transaction);
  }

  public async listTransactionsCtrl(req: Request, res: Response) {
    const transactions = await this.transactionUseCase.listTransactions();
    res.status(200).json(transactions);
  }
}
