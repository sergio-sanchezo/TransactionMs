import { Router } from "express";
import { SequelizeRepository } from "../repository/sequelize.repository";
import { AccountController } from "../controller/account.ctrl";
import { AccountUseCase } from "../../application/accountUseCase";

const router = Router();

const accountRepository = new SequelizeRepository();

const accountUseCase = new AccountUseCase(accountRepository);

const accountController = new AccountController(accountUseCase);

router.get("/", accountController.getCtrl);

export default router;
