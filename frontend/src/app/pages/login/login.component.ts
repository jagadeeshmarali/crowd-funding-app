import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin() {
    // this.loading = true;
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
      // this.authService.setUserData(result.user);
      console.log(result.user);
      this.router.navigate(['/']);
      // this.loading = false;
      // this.toastr.success('Login Successful', 'Success', {
      //   closeButton: true,
      //   progressBar: true
      // });
    }
    ).catch((err) => {
      // this.loading = false;
      // this.toastr.error('Login Failed', 'Error', {
      //   closeButton: true,
      //   progressBar: true
      // });
    });


  }
  googleAuth() {
    this.authService.googleAuth().then((result) => {
      if (result.additionalUserInfo.isNewUser) {
        this.authService.setUserData(result.user);
      }

      this.router.navigate(['/']);
      // this.loading = false;
      // this.toastr.success('Login Successful', 'Success', {
      //   closeButton: true,
      //   progressBar: true
      // });
    }
    ).catch((err) => {
      // this.loading = false;
      // this.toastr.error('Login Failed', 'Error', {
      //   closeButton: true,
      //   progressBar: true
      // });
    });
  }
}


