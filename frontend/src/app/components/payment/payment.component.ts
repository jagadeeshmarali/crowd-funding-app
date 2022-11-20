import { Component, HostListener, Input, OnInit } from "@angular/core";
import { PaymentService } from "../../services/payment.service";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../../services";
declare var StripeCheckout: StripeCheckoutStatic;
@Component({
  selector: "payment",
  templateUrl: "./payment.component.html"
})
export class PaymentComponent implements OnInit {
  constructor(private authService: AuthenticationService, private paymentService: PaymentService) { }
  @Input() amount;
  @Input() description;

  handler: StripeCheckoutHandler;
  confirmation: any;
  loading = false;
  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.payments.publishable_key,
      image: this.authService.currentUser.photoURL,
      locale: 'auto',
      source: async (source) => {
        this.loading = true;
        // const user = await this.authService.currentUser;
        // const fun = this.functions.httpsCallable('stripeCreateCharge');
        // this.confirmation = await fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
        this.loading = false;

      }
    });
  }
  async checkout(e) {
    this.handler.open({
      name: 'Crowdfunding app',
      description: this.description,
      amount: 1000,
      email: this.authService.currentUser.email,
    });
    e.preventDefault();
    // this.paymentService.redirectToCheckout();
  }
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }
}