import { Component } from "@angular/core";
import { UserRequestService } from "../../services";

@Component({
  selector: "request-page",
  templateUrl: "./request.component.html"
})
export class RequestPageComponent {
  requests = []
  constructor(private userRequestService: UserRequestService) {
    this.userRequestService.getRequests().toPromise().then((data: Array<any>) => {
      console.log(data);
      this.requests = data
    })

  }
}