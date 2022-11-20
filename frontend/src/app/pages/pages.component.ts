import { Component } from "@angular/core";
import { AuthenticationService, ProjectService } from "../services";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html"
})
export class PagesComponent {
  products: any;
  constructor(public authService: AuthenticationService, private projectService: ProjectService) {
    this.getProjects();
  }
  getProjects() {
    this.projectService.getAllProjects().toPromise().then((data) => {
      this.products = data;
      console.log(data);
    })
  }
}