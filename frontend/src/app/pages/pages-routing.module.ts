
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RegisterPageComponent } from './register/register.component';
import { AdminGuard, AuthGuard } from '../guards';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password.component';
import { ProjectDetailPageComponent } from './project-detail/project-detail.component';

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
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
