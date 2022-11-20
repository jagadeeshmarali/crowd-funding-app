import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from '../../environments/environment';
declare const Stripe
@Injectable({ providedIn: "root" })
export class PaymentService {
  constructor(private http: HttpClient) { }
  getMembership() {
    return of({
      priceId: "price_1M5IgXSHUDhfhzfcJyc7lslj",
    });
  }

  // requestMemberSession(priceId: string): void {
  //   this.http
  //     .post("this.baseUrl" + 'api/payments/create-checkout-session', {
  //       priceId: priceId,
  //     })
  //     .subscribe((session) => {
  //       this.redirectToCheckout(session.sessionId);
  //     });
  // }

  redirectToCheckout() {
    const stripe = Stripe(environment.payments.publishable_key);

    // stripe.redirectToCheckout({
    //   sessionId: sessionId,
    // });
  }
}