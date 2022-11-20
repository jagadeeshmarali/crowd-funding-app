import { Component } from "@angular/core";
import { ProjectService } from "../../services";

@Component({
  selector: "my-projects",
  templateUrl: "./my-projects.component.html"
})
export class MyProjectsPageComponent {
  products: any;
  constructor(private projectService: ProjectService) {
    this.getProjects();
  }
  getProjects() {
    this.projectService.getMyProjects().toPromise().then((data) => {
      this.products = data;
      console.log(data);
    })
  }
}