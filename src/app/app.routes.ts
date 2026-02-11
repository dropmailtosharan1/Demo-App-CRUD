import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-data/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-data/employee-form/employee-form.component';
import { LoginComponent } from './employee-data/login/login.component';
import { SignupComponent } from './employee-data/signup/signup.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'employee-list', component: EmployeeListComponent },
  // { path: 'employee-form', component: EmployeeFormComponent },

  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  {
    path: 'signup',
    loadComponent: () =>
      import('./employee-data/signup/signup.component').then(
        (c) => c.SignupComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./employee-data/login/login.component').then(
        (c) => c.LoginComponent,
      ),
  },
  {
    path: 'employee-list',
    loadComponent: () =>
      import('./employee-data/employee-list/employee-list.component').then(
        (c) => c.EmployeeListComponent,
      ),
  }, // Add as needed
  { path: '**', redirectTo: '/login' },
];
