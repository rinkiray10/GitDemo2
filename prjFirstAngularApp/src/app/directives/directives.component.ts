import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() {}
    employee: any []=[
      {"name":"sibi","age":"20","dept":"HR"},
      {"name":"Raj","age":"22","dept":"Admin"},
      {"name":"Abi","age":"24","dept":"Admin"},
      {"name":"Banu","age":"22","dept":"UI"},
      {"name":"sibi","age":"20","dept":"HR"},

    ];

    Cars: any []=[
      {"name":"MG Hector","color":"Blue"},
      {"name":"Ford","color":"Olive"},
      {"name":"Kia","color":"Orange"},
      {"name":"BMW","color":"red"},

    ];


  ngOnInit() {
  }

}
