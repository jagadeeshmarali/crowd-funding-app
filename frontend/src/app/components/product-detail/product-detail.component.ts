import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService, ProjectService, RewardService, TransactionService, UserRequestService } from '../../services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  projectDetail: any;
  rewards: any;
  transactions: any;
  url;
  transactionPayload: any;
  amountReceived = 0;

  constructor(private modalService: NgbModal,
    private projectService: ProjectService,
    public route: ActivatedRoute,
    public authService: AuthenticationService,
    public rewardService: RewardService,
    public transactionService: TransactionService,
    public userRequestService: UserRequestService
  ) {
    console.log(this.route.snapshot.params["slug"]);
    this.projectService.getProjectBySlug(this.route.snapshot.params["slug"]).toPromise().then((data) => {
      console.log(data);
      this.rewardService.getRewardByProjectId(data["id"]).toPromise().then((d: Array<any>) => {
        console.log(d)
        this.rewards = d;
      });
      this.transactionService.getProjectTransactions(data["id"]).toPromise().then((transactions: Array<any>) => {
        console.log(transactions);
        this.transactions = transactions;
        this.transactions?.forEach(element => {
          this.amountReceived += element?.rewardAmount
        });
      })

      this.projectDetail = data;
      var host = window.location.protocol + "//" + window.location.host;
      this.url = host + "/project/" + this.projectDetail['slug']
    })

  }

  ngOnInit(): void {
  }

  open(content: any) {
    if (this.authService.currentUser.uid != this.projectDetail['userId']) {
      this.modalService.open(content);
    }

  }
  openRequest(content) {
    this.modalService.open(content);
  }
  paymentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required]),
    expiration: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.required]),
    amount: new FormControl("", [Validators.required])
  });



  selectedReward(data) {
    let payload = {
      ...data,
      projectId: this.projectDetail["id"],
      rewardId: data["id"],
      projectTitle: this.projectDetail["title"],
      projectImageUrl: this.projectDetail["imageUrl"],
      projectSlug: this.projectDetail['slug']
    }
    this.paymentForm.get("amount").setValue(payload["rewardAmount"])
    this.paymentForm.get("amount").disable();
    delete payload['id']
    this.transactionPayload = payload;
  }
  checkout() {
    this.transactionService.create(this.transactionPayload).toPromise().then((data) => {
      console.log(data);
      this.modalService.dismissAll();
    })
  }
  requestAmountForm = new FormGroup({
    request: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  });
  submitRequest() {
    console.log(this.requestAmountForm.value);
    let payload = {
      description: this.requestAmountForm.value["request"],
      amount: this.requestAmountForm.value["amount"],
      projectId: this.projectDetail['id'],
      projectSlug: this.projectDetail['slug']
    }
    this.userRequestService.create(payload).toPromise().then((data) => {
      console.log(data);
      this.modalService.dismissAll();
    })
  }
  updateReward(id) {
    this.transactionService.updateTransaction(id).toPromise().then((data) => {
      console.log(data);
    })
  }

}
