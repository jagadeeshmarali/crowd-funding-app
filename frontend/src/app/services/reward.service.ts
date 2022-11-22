import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class RewardService {
  constructor(private http: HttpClient) { }
  create(payload) {
    return this.http.post(environment.backend_url + "/reward-create", {
      ...payload
    });
  }
  getRewardByProjectId(id) {
    return this.http.get(`${environment.backend_url}/reward-list-by-project?id=${id}`);
  }
}