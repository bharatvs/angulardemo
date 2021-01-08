import {Injectable} from '@angular/core'
import { IEmployee } from './employee'
import {HttpClient, HttpHandler}  from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable()
export class EmployeeService{
    

    constructor(private _http:HttpClient)
    {

    }
    getEmployees():Observable<IEmployee[]>
    {
      return this._http.get<IEmployee[]>("https://localhost:44358/api/employee");
    }

    getEmployeeByCode(code:string):Observable<IEmployee>{
      return this._http.get<IEmployee>("https://localhost:44358/api/employee/"+code);
    }

}