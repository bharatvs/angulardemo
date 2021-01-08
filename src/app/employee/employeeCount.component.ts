import {Component,Input,Output,EventEmitter} from "@angular/core"

@Component({
    selector:'employee-count',
    templateUrl:'./employeeCount.component.html',
    styleUrls:['./employeeCount.component.css']

})

export class EmployeeCountComponent{

    selectedRadioButtonValue:string="All";

    @Output()
    radioButtonCountchanged:EventEmitter<string>=new EventEmitter<string>();
   @Input()
    all:number=10;
   @Input()
   male:number=4;
   @Input()
   female:number=3;

   onRadioButtonChange(){
    this.radioButtonCountchanged.emit(this.selectedRadioButtonValue);
    
   }
}