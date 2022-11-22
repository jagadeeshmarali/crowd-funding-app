import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectService, RewardService } from './../../services';

@Component({
  selector: "create-project",
  templateUrl: "./create-project.component.html"
})
export class CreateProjectComponent {
  constructor(private modalService: NgbModal, private projectService: ProjectService, public fb: FormBuilder, private rewardService: RewardService) { }
  @Output() projectDetails = new EventEmitter();
  createProjectForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    fundingGoal: new FormControl('', [Validators.required]),
    launchDate: new FormControl('', [Validators.required]),
    campaignEndDate: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    rewards: this.fb.array([this.createReward()])
  });
  createReward(): FormGroup {
    return this.fb.group({
      projectId: new FormControl(''),
      description: new FormControl('', Validators.required),
      rewardAmount: new FormControl(0, Validators.required)
    })
  }
  get rewards(): FormArray {
    return <FormArray>this.createProjectForm.get('rewards');
  }
  open(createProject) {
    this.modalService.open(createProject);
  }
  submit() {
    this.projectService.create(this.createProjectForm.value).toPromise().then((data) => {
      console.log(data);
      console.log(this.createProjectForm.get('rewards').value)
      let rewards: Array<any> = this.createProjectForm.get('rewards').value;
      rewards.forEach(ele => {
        let payload = { ...ele }
        payload.projectId = data['id'];
        this.rewardService.create(payload).toPromise().then((data2) => {
          console.log(data2);
        });
      })
      this.modalService.dismissAll();
    })
  }
  getImageUrl(url) {
    this.createProjectForm.get("imageUrl").setValue(url);
  }
  addRewardGroup() {
    this.rewards.push(this.createReward());
  }
}