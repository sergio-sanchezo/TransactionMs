import { Router } from "express";
import { TransactionController } from "../controller/transaction.ctrl";
import { SequelizeRepository } from "../repository/sequelize.repository";
import { TransactionUseCase } from "../../application/transactionUseCase";
import { PaypalGateway } from "../services/paypal.gateway";
import { check } from "express-validator";
import { validateFields } from "../../../middlewares/validate-fields";

const router = Router();

const transactionRepository = new SequelizeRepository();
const paymentGateway = new PaypalGateway();

const transactionUseCase = new TransactionUseCase(
  transactionRepository,
  paymentGateway
);

const transactionController = new TransactionController(transactionUseCase);

router.get("/", transactionController.listTransactionsCtrl);

router.get(
  "/list/:userId",
  transactionController.getTransactionsByReceiverCtrl
);

router.get("/detail/:id", transactionController.getCtrl);

router.post(
  "/p2p",
  [
    check("amount", "Amount required").not().isEmpty(),
    check("receiverId", "Receiver id required").not().isEmpty(),
    check("senderId", "Sender id required").not().isEmpty(),
    validateFields,
  ],
  transactionController.postP2PCtrl
);

// Paypal routes to charge accounts
router.post(
  "/create-order",
  [
    check("amount", "Amount required").not().isEmpty(),
    check("userId", "User id required").not().isEmpty(),
    validateFields,
  ],
  transactionController.createChargeOrderCtrl
);
router.get("/capture-order", transactionController.postChargeCtrl);
router.get("/cancel-order", transactionController.cancelOrderCtrl);

export default router;
