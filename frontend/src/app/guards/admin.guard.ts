import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private afAuth: AngularFireAuth, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.fetchCurrentUser().pipe(map(x => {
      let user = x?.payload.data();
      if (user?.role == 'admin') { return true }
      else { return false }
    }));
  }
}