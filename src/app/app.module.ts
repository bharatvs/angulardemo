import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router'
import {AppRoutingModule} from './app.routing.module'
import {EmployeeComponent}  from './employee/employee.component';
import { AppComponent } from './app.component';
import {EmployeeListComponenet} from './employee/employeelist.component';
import {EmployeeTitlePipe} from './employee/employeeTitle.pipe';
import {EmployeeCountComponent} from './employee/employeeCount.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './others/pageNotFound.component';
import { EmployeeService } from './employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponenet,EmployeeTitlePipe,
    EmployeeCountComponent,HomeComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
