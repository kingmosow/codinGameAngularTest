import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountWithBalance: Map<string,number> = new Map<string, number>();

  constructor() { }

  public async createAccount(accountID:string):Promise<void>{
    if(this.accountWithBalance.has(accountID)){
      throw Error("ACCOUNT_EXISTS")
    }
    this.accountWithBalance.set(accountID,0)
  }
  public async topUp(accountID:string,amount : number):Promise<number | undefined>{
    if(!this.accountWithBalance.has(accountID)){
      throw Error("ACCOUNT_DOES_NOT_EXIST")
    }
    // this.accountWithBalance.set(accountID,<number>this.accountWithBalance.get(accountID));
    this.accountWithBalance.set(accountID,amount);
    return this.accountWithBalance.get(accountID)
  }
}
