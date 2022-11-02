import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import { switchMap, take } from "rxjs/operators";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private afth: AngularFireAuth) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.afth.idToken.pipe(
      take(1),
      switchMap((token: any) => {
        if (token) {
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          });
        }
        return next.handle(request);
      })

    );

  }
}