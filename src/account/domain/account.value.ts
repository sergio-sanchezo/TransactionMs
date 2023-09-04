import { AccountEntity } from "./account.entity";
import { v4 as uuid } from "uuid";

export class AccountValue implements AccountEntity {
  id: string;
  balance: number;
  owner: string;

  constructor({ balance, owner }: { balance: number; owner: string }) {
    this.id = uuid();
    this.balance = balance;
    this.owner = owner;
  }
}
