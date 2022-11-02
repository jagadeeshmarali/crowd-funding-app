import { Component } from "@angular/core";
import { AuthenticationService } from "../services";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html"
})
export class PagesComponent {
  constructor(public authService: AuthenticationService) {
  }
}