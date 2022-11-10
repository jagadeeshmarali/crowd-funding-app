import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {

  emailForm = new FormGroup({
    email: new FormControl(''),
  });
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() { }

  onLoggedin() {
    this.authService.forgotPassword(this.emailForm.value.email).then(res => {
      this.router.navigate(['/']);
    })
  }

}
