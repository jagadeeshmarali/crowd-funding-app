import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectService } from './../../services';

@Component({
  selector: "create-project",
  templateUrl: "./create-project.component.html"
})
export class CreateProjectComponent {
  constructor(private modalService: NgbModal, private projectService: ProjectService) { }
  @Output() projectDetails = new EventEmitter();
  createProjectForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    fundingGoal: new FormControl(1000000, [Validators.required]),
    minBid: new FormControl(1000, [Validators.required]),
    launchDate: new FormControl('', [Validators.required]),
    campaignEndDate: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required])
  });

  open(createProject) {
    this.modalService.open(createProject);
  }
  submit() {
    this.projectService.create(this.createProjectForm.value).toPromise().then((data) => {
      this.modalService.dismissAll();
    })
  }
  getImageUrl(url) {
    this.createProjectForm.get("imageUrl").setValue(url);
  }
}