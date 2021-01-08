import {Component, OnInit} from '@angular/core'
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector:'employee-list',
    templateUrl:'./employeelist.component.html',
    styleUrls:['./employeelist.component.css']
    
})
export class EmployeeListComponenet implements OnInit{

    selectedRadioButtonValue:string='All';
    employees:IEmployee[];
    constructor(private _employeeservice:EmployeeService){

    }
    ngOnInit(): void {
        this._employeeservice.getEmployees().subscribe((employeeData)=>this.employees=employeeData);
                                     
    }


    
    getAllEmployeesCount():number{
        return this.employees.length;
    }
    getMaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender==='Male').length;
    }
    getFemaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender==='Female').length;
    }
    trackByID(index:number,employee:any):string{
        return employee.EId;
    }

    OnEmployeeRadioButtonCountChange(selectedradiobutton:string):void{
        this.selectedRadioButtonValue=selectedradiobutton;

    }

}

 