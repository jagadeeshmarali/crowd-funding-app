import { ComponentModule } from './../components/component.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePage } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePage

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    SharedModule,
    ComponentModule

  ],
  providers: [
    SharedService
  ],
  bootstrap: []
})
export class PagesModule { }
