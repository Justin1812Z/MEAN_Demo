import { Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

export const routes: Routes = [
  { path: '', component: EmployeesListComponent, title: 'Employees List' },
  { path: 'new', component: AddEmployeeComponent }, // Ensure this route exists
  { path: 'edit/:id', component: EditEmployeeComponent }, // Ensure this route exists
];
