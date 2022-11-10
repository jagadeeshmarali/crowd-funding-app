import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPageComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  register() {
    this.authService.signUp(this.signUpForm.value.email, this.signUpForm.value.password).then((result) => {
      this.authService.setUserData(result.user);
      this.router.navigate(['/']);
      // this.loading = false;
      // this.toastr.success('You have been successfully registered!', 'Success', {
      //   closeButton: true,
      //   progressBar: true
      // });
      this.signUpForm.reset();
    }
    ).catch((err) => {
      // this.loading = false;
      // this.toastr.error('Something went Wrong. Please Try after Sometime', 'Error', {
      //   closeButton: true,
      //   progressBar: true
      // });
    });
  }

}
