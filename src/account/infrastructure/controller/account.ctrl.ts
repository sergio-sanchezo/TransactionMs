import { Request, Response } from "express";
import { AccountUseCase } from "../../application/accountUseCase";

export class AccountController {
  constructor(private readonly accountUseCase: AccountUseCase) {}

  public getCtrl = async (req: Request, res: Response) => {};

  public postCtrl = async (req: Request, res: Response) => {};

  public deleteCtrl = async (req: Request, res: Response) => {};
}
