export enum UserType {
   Contractual="contractual",
   Permenant = "permenant"
  }

  export enum Gender {
    Male = "male",
    Female = "female"
   }

export interface PeriodicElement {
    code:number;
    fname: string;
    fullname:string;
    mname: string;
    lname: string;
    class: string;
    rollno: number;
    hindi: number;
    drawing: number;
    math: number;
    english: number;
    science: number;
    totalmarks:number;
  }
  