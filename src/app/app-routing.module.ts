import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import {EmployeeformComponent} from "../app/employeeform/employeeform.component";
const routes: Routes = [
  {path:"employeeform",component:EmployeeformComponent},
  {path:"employeelist",component:EmplistComponent},
  {path:"",redirectTo:"employeeform",pathMatch:'full'},
  {path:"**",component:PageNotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
