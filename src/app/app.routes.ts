import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-data/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-data/employee-form/employee-form.component';
import { LoginComponent } from './employee-data/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-form', component: EmployeeFormComponent }
];
