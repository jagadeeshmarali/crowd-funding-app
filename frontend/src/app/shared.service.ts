import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

  constructor() { }

  toggleSidebarClass() {
    return this.navSidebarClass = !this.navSidebarClass;
  }
  toggleHamburgerClass() {
    return this.hamburgerClass = !this.hamburgerClass;
  }


}
