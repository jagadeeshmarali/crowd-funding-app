import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  constructor(private http: HttpClient) { }
  create(payload) {
    return this.http.post(environment.backend_url + "/transaction-create", {
      ...payload
    });
  }
  getMyTransactions() {
    return this.http.get(`${environment.backend_url}/get-user-transactions`);
  }
  getProjectTransactions(id) {
    return this.http.get(`${environment.backend_url}/get-project-transactions?projectId=${id}`);
  }
}