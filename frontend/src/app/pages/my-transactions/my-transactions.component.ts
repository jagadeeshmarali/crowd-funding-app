import { TransactionService } from './../../services/transaction.service';
import { Component } from "@angular/core";

@Component({
  selector: "my-transaction-page",
  templateUrl: "./my-transactions.component.html"
})
export class MyTransactionPageComponent {
  transactions = []
  constructor(private transactionService: TransactionService) {
    this.transactionService.getMyTransactions().toPromise().then((data: Array<any>) => {
      console.log(data);
      this.transactions = data;
    })
  }
}