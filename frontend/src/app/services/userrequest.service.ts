import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserRequestService {
  constructor(private http: HttpClient) { }
  create(payload) {
    return this.http.post(environment.backend_url + "/user-request-create", {
      ...payload
    });
  }
  getRequests() {
    return this.http.get(environment.backend_url + "/get_all_requests");
  }
}