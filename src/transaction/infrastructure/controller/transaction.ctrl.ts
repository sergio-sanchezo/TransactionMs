import { Request, Response } from "express";
import { TransactionUseCase } from "../../application/transactionUseCase";

export class TransactionController {
  constructor(private readonly transactionUseCase: TransactionUseCase) {}

  public getCtrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transaction = await this.transactionUseCase.getDetailTransaction(id);
    res.status(200).json(transaction);
  };

  public getTransactionsByReceiverCtrl = async (
    req: Request,
    res: Response
  ) => {
    const { userId } = req.params;
    const transactions =
      await this.transactionUseCase.getTransactionsByReceiverId(userId);
    res.status(200).json(transactions);
  };

  public postChargeCtrl = async (req: Request, res: Response) => {
    try {
      const { token } = req.query;
      await this.transactionUseCase.captureOrder(token as string);
      res.redirect("/payed.html");
    } catch (error) {
      res.status(400).json({ error });
    }
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

  public createChargeOrderCtrl = async (req: Request, res: Response) => {
    const { amount, userId } = req.body;
    const order = await this.transactionUseCase.createOrder(amount, userId);
    res.status(200).json({ order });
  };

  public cancelOrderCtrl = async (req: Request, res: Response) => {
    try {
      const { token } = req.query;
      await this.transactionUseCase.cancelOrder(token as string);
      res.redirect("/cancelled.html");
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
