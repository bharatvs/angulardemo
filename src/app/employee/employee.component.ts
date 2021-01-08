import {Component,OnInit} from "@angular/core";
import {ActivatedRoute,Router} from '@angular/router';
import { IEmployee } from './employee';
import {EmployeeService} from './employee.service'

@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
    
})
export class EmployeeComponent implements OnInit{

    employee:IEmployee;
    statusMessage:string="Loading.....";
   constructor(private _activatedRoute:ActivatedRoute,
    private _employeeService:EmployeeService,private _router:Router){

   }
    
   onBackButtonClick():void{
       this._router.navigate(['/employee']);
   }
   
   ngOnInit():void{
      let empCode:string= this._activatedRoute.snapshot.params['code'];
      this._employeeService.getEmployeeByCode(empCode).subscribe(
          (employeedata) =>this.employee=employeedata
      );
      }

}