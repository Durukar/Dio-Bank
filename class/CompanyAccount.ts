import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status:boolean){
    super(name, accountNumber, status)
  }

  getLoan = (value:number): void => {
    if(this.validateStatus(true)) {
      console.log(`Seu imprestimo de $${value} foi aprovado e adicionado ao saldo da sua conta!!!`);
      this.deposit(value);
    }
  }
}
