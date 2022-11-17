import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loading = true;

  public currentHref: string = "";


  constructor(
    location: Location,
    router: Router,
    public ref: ChangeDetectorRef,
    public authService: AuthenticationService) {
    // router.events.subscribe((val) => {
    //   if (location.path() != '') {
    //     this.currentHref = location.path();
    //   } else {
    //     this.currentHref = ''
    //   }
    // });
    console.log(this.authService.currentUser);
  }


  ngOnInit(): void {
  }



}

