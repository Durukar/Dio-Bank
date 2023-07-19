import { DioAccount } from "./DioAccount"

export class YongPeopleAccount extends DioAccount {
  constructor(name: string, accountNumber: number, status:boolean) {
    super(name, accountNumber, status)
  }

  depositSpecial = (value:number): void =>{
    if(this.validateStatus(true)){
      this.deposit(value + 10);
    }
  }

}