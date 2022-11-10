import { AuthenticationService } from './services/auth.service';
import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fetchSession = true;
  loading = true;
  title = 'kripton';
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;
  constructor(
    public authService: AuthenticationService,
    public sharedService: SharedService,
  ) {
    this.getSession();
  }
  getSession() {
    this.loading = true
    this.authService.fetchCurrentUser().subscribe(data => {
      console.log(data);
      this.authService.currentUser = data?.payload.data();
      this.authService.isLoggedIn = (data != null);
      console.log(this.authService.isLoggedIn)
      this.fetchSession = false;
      this.loading = false;
    }
    );
  }
}
