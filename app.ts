import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { YongPeopleAccount } from './class/YongPeopleAccount';

// Conta PF
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10, true);
console.log(peopleAccount.getName());
peopleAccount.deposit(100);
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(50);

// Conta PJ
const companyAccount: CompanyAccount = new CompanyAccount('Lucas', 20, true)
console.log(companyAccount.getName());
companyAccount.deposit(100);
console.log(companyAccount.getBalance());
companyAccount.withdraw(50);
companyAccount.getLoan(500);

// Conta Yong
const yongPeopleAccount: YongPeopleAccount = new YongPeopleAccount('Eduardo', 2023, true)
console.log(yongPeopleAccount.getName());
yongPeopleAccount.depositSpecial(100);
console.log(yongPeopleAccount.getBalance());
yongPeopleAccount.withdraw(50);
console.log(yongPeopleAccount.getBalance());