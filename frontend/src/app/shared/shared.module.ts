import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedService } from '../shared.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavHeaderComponent,
    NavigationComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavHeaderComponent,
    NavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PerfectScrollbarModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: []
})
export class SharedModule { }
