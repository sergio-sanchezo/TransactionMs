import { AccountRepository } from "../domain/account.repository";
import { AccountValue } from "../domain/account.value";

export class AccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  public createAccount = async (account: AccountValue) => {
    const accountValue = new AccountValue(account);
    const accountCreated = await this.accountRepository.createAccount(
      accountValue
    );
    return accountCreated;
  };

  public updateAccount = async (id: string, account: AccountValue) => {
    const accountUpdated = await this.accountRepository.updateAccount(
      id,
      account
    );
    return accountUpdated;
  };

  public getDetailAccount = async (id: string) => {
    const account = await this.accountRepository.getAccountById(id);
    return account;
  };

  public listAccounts = async () => {
    const accounts = await this.accountRepository.listAccounts();
    return accounts;
  };

  public deleteAccount = async (id: string) => {
    const account = await this.accountRepository.deleteAccount(id);
    return account;
  };
}
