import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  //declaring variable

  name:string="SRI";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  tupleval:[string,number,boolean];
  dynamicvalue:any;
  student:object;
  picture="assests/images/flower.jpg"

  constructor() {
    this.age=21;
    this.hobbies=["Dancing","Singing"];
    this.marks=[90,78,80];
    this.Istrue=false;
    this.tupleval=["Pune",1200,true];
    this.dynamicvalue=90;
   }

  ngOnInit(): void {
  }

}
