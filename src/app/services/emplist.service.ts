import { Injectable } from "@angular/core";

import {PeriodicElement,Gender,UserType} from "../model/Emp.model"

@Injectable()
export class EmployeeService {
   private employees:PeriodicElement[]=[
    { code:1,fullname:"e",fname:"jerry",mname:"niel",lname:"shri",class:"10th",rollno:111,math:34,english:35,hindi:89,science:89,drawing:95,totalmarks:0 },
    { code:2,fullname:"e",fname:"jerry",mname:"niel",lname:"shri",class:"10th",rollno:222,math:34,english:64,hindi:65,science:89,drawing:46,totalmarks:0 },
    { code:3,fullname:"e",fname:"jerry",mname:"niel",lname:"shri",class:"10th",rollno:333,math:34,english:78,hindi:79,science:65,drawing:78,totalmarks:0 },
    { code:4,fullname:"e",fname:"jerry",mname:"niel",lname:"shri",class:"10th",rollno:444,math:34,english:27,hindi:89,science:54,drawing:78,totalmarks:0 },
    { code:5,fullname:"e",fname:"jerry",mname:"niel",lname:"shri",class:"10th",rollno:555,math:34,english:97,hindi:99,science:78,drawing:99,totalmarks:0 },
    { code:6,fullname:"e",fname:"jerry",mname:"niel",lname:"shri",class:"10th",rollno:666,math:34,english:98,hindi:78,science:46,drawing:98,totalmarks:0},

   ]

   getEmployees():PeriodicElement[]{
     return this.employees;
   }

}