import { Router } from "express";
import { TransactionUseCase } from "../../application/transactionUseCase";
import { TransactionController } from "../controller/transaction.ctrl";
import { SequelizeRepository } from "../repository/sequelize.repository";

const router = Router();

const transactionRepository = new SequelizeRepository();

const transactionUseCase = new TransactionUseCase(transactionRepository);

const transactionController = new TransactionController(transactionUseCase);

router.get("/", transactionController.listTransactionsCtrl);

export default router;
