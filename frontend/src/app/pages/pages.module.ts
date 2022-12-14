import { PagesComponent } from './pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password.component';
import { RegisterPageComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { ProjectDetailPageComponent } from './project-detail/project-detail.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ImageUploadComponent } from '../shared/components/image-upload/image-upload.component';
import { CreateProjectComponent } from '../components/create-project/create-project.component';
import { MyProjectsPageComponent } from './my-projects/my-projects.component';
import { MyTransactionPageComponent } from './my-transactions/my-transactions.component';
import { TransactionListComponent } from '../components/transaction-list/transaction-list.component';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { FundedProjectsPageComponent } from './funded-projects/funded-projects.component';
import { RequestPageComponent } from './requests/request.component';


@NgModule({
  declarations: [
    PagesComponent,
    ProductListComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    LoginComponent,
    ProjectDetailPageComponent,
    ProductDetailComponent,
    ImageUploadComponent,
    CreateProjectComponent,
    MyProjectsPageComponent,
    MyTransactionPageComponent,
    TransactionListComponent,
    FundedProjectsPageComponent,
    RequestPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SpinnerModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [
    SharedService
  ],
  bootstrap: []
})
export class PagesModule { }
