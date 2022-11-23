import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor(private http: HttpClient) { }
  create(payload) {
    return this.http.post(environment.backend_url + "/project-create", {
      ...payload
    });
  }
  getMyProjects() {
    return this.http.get(environment.backend_url + "/get_my_projects");
  }
  getProjectBySlug(slug: String) {
    return this.http.get(`${environment.backend_url}/get_project_by_slug?slug=${slug}`);
  }
  getAllProjects() {
    return this.http.get(`${environment.backend_url}/get_all_projects`);
  }
  async getMyFundedProjects() {
    let results = await this.http.get(`${environment.backend_url}/get_all_projects`).toPromise();
    return results;

  }
}