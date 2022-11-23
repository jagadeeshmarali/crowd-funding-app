import { Component } from "@angular/core";
import { ProjectService, TransactionService } from "../../services";

@Component({
  selector: "funded-projects-page",
  templateUrl: "./funded-projects.component.html"
})
export class FundedProjectsPageComponent {
  projects = [];
  constructor(private projectService: ProjectService, private transactionService: TransactionService) {
    this.transactionService.getMyTransactions().toPromise().then((transactions: Array<any>) => {
      this.projectService.getAllProjects().toPromise().then((projects: Array<any>) => {
        transactions.forEach(ele => {
          let temp = projects.find(x => x.slug == ele.projectSlug);
          if (temp) {
            if (this.projects.find(x => x.slug == temp.slug)) {
            }
            else { this.projects.push(temp) }
          }
        })
        console.log(this.projects);

      })
    })
  }
}