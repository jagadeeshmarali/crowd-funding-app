import { Component, Input } from "@angular/core";

@Component({
  selector: "transaction-list",
  templateUrl: "./transaction-list.component.html"
})
export class TransactionListComponent {
  @Input() transactions = [];

}