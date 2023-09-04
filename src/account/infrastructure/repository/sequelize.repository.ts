import { AccountRepository } from "../../domain/account.repository";
import { AccountEntity } from "../../domain/account.entity";
import { AccountModel } from "../model/account.model";

export class SequelizeRepository implements AccountRepository {
  async listAccounts(): Promise<any> {
    const accounts = await AccountModel.findAll();
    return accounts;
  }
  async getAccountById(id: string): Promise<any> {
    const account = await AccountModel.findByPk(id);
    return account;
  }
  async createAccount(account: AccountEntity): Promise<any> {
    const accountCreated = await AccountModel.create({ account });
    return accountCreated;
  }
  async updateAccount(id: string, account: AccountEntity): Promise<any> {
    const accountUpdated = await AccountModel.update(account, {
      where: { id },
    });
    return accountUpdated;
  }
  async deleteAccount(id: string): Promise<any> {
    const accountDeleted = await AccountModel.destroy({
      where: { id },
    });
    return accountDeleted;
  }
}
