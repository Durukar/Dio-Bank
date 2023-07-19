export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = false

  constructor(name: string, accountNumber: number, status:boolean){
    this.name = name;
    this.accountNumber = accountNumber;
    this.status = status;
  }

  getName = (): string => {
    return this.name;
  }

  getBalance = (): number =>{
    return this.balance;
  }

  deposit = (value:number): void => {
    if(this.validateStatus(true)){
      this.balance += value;
      console.log(`Você depositou $${value}, seu saldo atual é de ${this.getBalance()}`) 
    } else {
      throw new Error('Deposito negado')
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus(true) && this.balance > value) {
      this.balance -= value;
      console.log(`Voce sacou $${value} da sua conta, seu saldo atual é de $${this.getBalance()}!!`)
    }
  }

  public validateStatus = (status:boolean): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta esta inativa')
  }
}
