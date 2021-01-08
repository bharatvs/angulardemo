
import { NgModule } from '@angular/core';


import {RouterModule,Routes} from '@angular/router'

import {EmployeeComponent}  from './employee/employee.component';

import {EmployeeListComponenet} from './employee/employeelist.component';

import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './others/pageNotFound.component';


const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeeListComponenet},
  {path:'employee/:code',component:EmployeeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}

]
@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
