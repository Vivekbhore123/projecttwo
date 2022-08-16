import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/emplist.service';



@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  providers:[EmployeeService]
})
export class EmplistComponent implements OnInit {


  constructor(private _empservice:EmployeeService) { }

  ngOnInit(): void {
  } 

  displayedColumns: string[] = ['code','fullname','class','rollno', 'math', 'english','hindi','science','drawing','totalmarks'];
  dataSource = this._empservice.getEmployees();

  


  
   
   
  
}
