import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../shared.service";


@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePage implements OnInit {

  title = 'App';
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

  constructor(public sharedService: SharedService) {

  }

  ngOnInit(): void {
  }
}