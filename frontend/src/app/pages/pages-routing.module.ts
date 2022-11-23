
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RegisterPageComponent } from './register/register.component';
import { AdminGuard, AuthGuard } from '../guards';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password.component';
import { ProjectDetailPageComponent } from './project-detail/project-detail.component';
import { MyProjectsPageComponent } from './my-projects/my-projects.component';
import { MyTransactionPageComponent } from './my-transactions/my-transactions.component';
import { FundedProjectsPageComponent } from './funded-projects/funded-projects.component';
import { RequestPageComponent } from './requests/request.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    pathMatch: 'full'
  },
  {
    path: "forgot-password",
    component: ForgotPasswordPageComponent,
    pathMatch: "full"
  },
  {
    path: "project/:slug",
    component: ProjectDetailPageComponent,
    pathMatch: "full"
  },
  {
    path: "my-projects",
    component: MyProjectsPageComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "my-transactions",
    component: MyTransactionPageComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "my-funded-projects",
    component: FundedProjectsPageComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "requests",
    component: RequestPageComponent,
    pathMatch: "full",
    canActivate: [AuthGuard, AdminGuard]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
