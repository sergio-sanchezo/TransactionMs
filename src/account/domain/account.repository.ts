import { AccountEntity } from "./account.entity";

export interface AccountRepository {
  listAccounts(): Promise<AccountEntity[] | null>;
  getAccountById(id: string): Promise<AccountEntity | null>;
  createAccount(account: AccountEntity): Promise<AccountEntity>;
  updateAccount(
    id: string,
    account: AccountEntity
  ): Promise<AccountEntity | null>;
  deleteAccount(id: string): Promise<AccountEntity | null>;
}
